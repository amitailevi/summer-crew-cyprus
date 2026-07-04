/**
 * Summer Crew Cyprus — page bootstrap (form, calendar, links, state).
 */
(function () {
  "use strict";

  if (!window.SCC) {
    console.error("SCC core missing — check scc-core.js load order");
    return;
  }

  var c = SCC.getConfig();
  var nowYear = new Date().getFullYear();

  SCC.applyMeta(c);

  var els = {
    fbFooter: document.getElementById("fb-footer"),
    btnSecondary: document.querySelector(".btn-secondary"),
    pendingMessenger: document.getElementById("form-pending-messenger"),
    errMessenger: document.getElementById("form-err-messenger"),
    emailFooter: document.getElementById("email-footer"),
    siteFooter: document.getElementById("site-footer"),
    form: document.getElementById("apply-form"),
    birthYear: document.getElementById("birth_year"),
    sentMsg: document.getElementById("form-sent-msg"),
    pendingMsg: document.getElementById("form-pending-msg"),
    errMsg: document.getElementById("form-err-msg"),
    book: document.getElementById("book"),
    calIframe: document.getElementById("calendar-embed"),
    calPlaceholder: document.getElementById("calendar-placeholder")
  };

  function setHref(el, url) {
    if (el && url) el.href = url;
  }

  setHref(els.fbFooter, c.FACEBOOK_PAGE);
  setHref(els.btnSecondary, c.FACEBOOK_PAGE);
  setHref(els.pendingMessenger, c.MESSENGER_URL);
  setHref(els.errMessenger, c.MESSENGER_URL);

  if (els.emailFooter) {
    els.emailFooter.href = "mailto:" + c.CONTACT_EMAIL;
    els.emailFooter.textContent = c.CONTACT_EMAIL;
  }
  if (els.siteFooter) {
    els.siteFooter.href = c.SITE_URL;
    els.siteFooter.textContent = String(c.SITE_URL).replace(/^https?:\/\//, "");
  }

  var formAction = SCC.formActionUrl(c);
  if (els.form) els.form.action = formAction;

  if (els.birthYear) {
    els.birthYear.min = String(nowYear - 21);
    els.birthYear.max = String(nowYear - 16);
    els.birthYear.title = "Ages 16–21 only";
  }

  function hideFormMsgs() {
    if (els.sentMsg) els.sentMsg.hidden = true;
    if (els.pendingMsg) els.pendingMsg.hidden = true;
    if (els.errMsg) els.errMsg.hidden = true;
  }

  function scrollToBook() {
    if (els.book) els.book.scrollIntoView({ behavior: "smooth" });
  }

  function updateUrlSent(state) {
    if (!history.replaceState) return;
    var base = SCC.siteBase(c) + "/";
    history.replaceState(null, "", base + "?sent=" + state + "#book");
  }

  function showSent() {
    hideFormMsgs();
    if (els.sentMsg) els.sentMsg.hidden = false;
    scrollToBook();
    SCC.storageSet("scc_sent", "1");
  }

  function showPending() {
    hideFormMsgs();
    if (els.pendingMsg) els.pendingMsg.hidden = false;
    scrollToBook();
    SCC.storageSet("scc_sent", "pending");
  }

  function showError(detail) {
    hideFormMsgs();
    if (els.errMsg) {
      if (detail && els.errMsg.dataset) {
        els.errMsg.dataset.lastError = detail;
      }
      els.errMsg.hidden = false;
    }
  }

  function restoreFormState() {
    var sentParam = new URLSearchParams(location.search).get("sent");
    if (sentParam === "1") return showSent();
    if (sentParam === "pending") return showPending();
    var stored = SCC.storageGet("scc_sent");
    if (stored === "1") showSent();
    else if (stored === "pending") showPending();
  }

  restoreFormState();

  if (els.form) {
    els.form.addEventListener("submit", function (ev) {
      ev.preventDefault();

      var honey = els.form.querySelector('input[name="_honey"]');
      if (honey && honey.value) return; /* bot — silent drop */

      var btn = els.form.querySelector('button[type="submit"]');
      var year = els.birthYear ? parseInt(els.birthYear.value, 10) : NaN;

      if (!SCC.isValidBirthYear(year, nowYear)) {
        if (els.birthYear) {
          els.birthYear.setCustomValidity("Must be age 16–21");
          els.birthYear.reportValidity();
        }
        return;
      }
      if (els.birthYear) els.birthYear.setCustomValidity("");

      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }
      hideFormMsgs();

      var controller = new AbortController();
      var timeoutId = setTimeout(function () {
        controller.abort();
      }, SCC.SUBMIT_TIMEOUT_MS);

      SCC.submitApplication(els.form, formAction, controller.signal)
        .then(function (data) {
          clearTimeout(timeoutId);
          var status = SCC.parseFormSubmitResponse(data);
          if (status === "success") {
            if (btn) btn.textContent = "Sent ✓";
            showSent();
            updateUrlSent("1");
            return;
          }
          if (status === "pending") {
            if (btn) {
              btn.textContent = "Submitted ✓";
              btn.disabled = true;
            }
            showPending();
            updateUrlSent("pending");
            return;
          }
          throw new Error(data && data.message ? data.message : "submit rejected");
        })
        .catch(function (err) {
          clearTimeout(timeoutId);
          if (btn) {
            btn.disabled = false;
            btn.textContent = "Send application →";
          }
          var detail = err && err.name === "AbortError"
            ? "timeout"
            : (err && err.message) || "unknown";
          showError(detail);
        });
    });
  }

  var calRaw = c.GOOGLE_CALENDAR_EMBED || c.GOOGLE_CALENDAR_URL || "";
  var calUrl = SCC.calendarEmbedUrl(calRaw);

  if (calUrl && els.calIframe && els.calPlaceholder) {
    els.calIframe.src = calUrl;
    els.calIframe.hidden = false;
    els.calPlaceholder.hidden = true;
  } else if (els.calPlaceholder) {
    SCC.setCalendarFallback(els.calPlaceholder, c);
  }
})();
