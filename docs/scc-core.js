/**
 * Summer Crew Cyprus — shared client logic (single source of truth).
 * Config lives in config.js; fallbacks only if config fails to load.
 */
(function (global) {
  "use strict";

  var FALLBACK_SITE = "https://summer-crew-cyprus.web.app";

  var FALLBACK = {
    APPLY_FORM_EMAIL: "summercrewcyprus@gmail.com",
    GOOGLE_CALENDAR_EMBED: "",
    GOOGLE_CALENDAR_URL: "",
    FACEBOOK_PAGE: "https://www.facebook.com/profile.php?id=61591410037417",
    MESSENGER_URL: "https://www.facebook.com/messages/t/61591410037417",
    CONTACT_EMAIL: "summercrewcyprus@gmail.com",
    SITE_URL: FALLBACK_SITE
  };

  var SUBMIT_TIMEOUT_MS = 30000;

  function getConfig() {
    var raw = global.SCC_CONFIG || {};
    var c = {};
    var k;
    for (k in FALLBACK) {
      if (Object.prototype.hasOwnProperty.call(FALLBACK, k)) {
        c[k] = raw[k] !== undefined && raw[k] !== null && raw[k] !== ""
          ? raw[k]
          : FALLBACK[k];
      }
    }
    if (!c.SITE_URL || c.SITE_URL === "/") {
      c.SITE_URL = global.location && global.location.origin
        ? global.location.origin + "/"
        : FALLBACK_SITE + "/";
    }
    return c;
  }

  function siteBase(c) {
    return String(c.SITE_URL || FALLBACK_SITE).replace(/\/$/, "");
  }

  function applyMeta(c) {
    var base = siteBase(c);
    var ogUrl = document.getElementById("meta-og-url");
    var ogImg = document.getElementById("meta-og-image");
    var canonical = document.getElementById("meta-canonical");
    if (ogUrl) ogUrl.setAttribute("content", base + "/");
    if (ogImg) ogImg.setAttribute("content", base + "/assets/cover-with-logo-slogan.png");
    if (canonical) canonical.setAttribute("href", base + "/");
    var ld = document.querySelector('script[type="application/ld+json"]');
    if (ld) {
      try {
        var j = JSON.parse(ld.textContent);
        j.url = base + "/";
        j.logo = base + "/assets/logo-summer-crew-cyprus.png";
        if (c.CONTACT_EMAIL) j.email = c.CONTACT_EMAIL;
        ld.textContent = JSON.stringify(j);
      } catch (e) { /* keep static JSON-LD */ }
    }
  }

  function calendarEmbedUrl(url) {
    if (!url || url === "https://calendar.google.com/") return "";
    if (
      url.indexOf("calendar.google.com/calendar/appointments") !== -1 &&
      url.indexOf("gv=true") === -1
    ) {
      return url + (url.indexOf("?") !== -1 ? "&" : "?") + "gv=true";
    }
    return url;
  }

  function formActionUrl(c) {
    var email = c.APPLY_FORM_EMAIL || c.CONTACT_EMAIL;
    return "https://formsubmit.co/ajax/" + encodeURIComponent(email);
  }

  function parseFormSubmitResponse(data) {
    if (!data || typeof data !== "object") return "error";
    if (data.success === true || data.success === "true") return "success";
    if (data.success === false || data.success === "false") {
      var msg = String(data.message || "").toLowerCase();
      if (msg.indexOf("activ") !== -1) return "pending";
    }
    return "error";
  }

  function storageGet(key) {
    try { return global.sessionStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, val) {
    try { global.sessionStorage.setItem(key, val); } catch (e) { /* private mode */ }
  }

  function submitApplication(form, formAction, signal) {
    return fetch(formAction, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
      signal: signal
    }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.text();
    }).then(function (text) {
      try {
        return JSON.parse(text);
      } catch (e) {
        throw new Error("Invalid JSON response");
      }
    });
  }

  function isValidBirthYear(year, nowYear) {
    return Number.isFinite(year) && year >= nowYear - 21 && year <= nowYear - 16;
  }

  function setCalendarFallback(container, c) {
    container.textContent = "";
    var wrap = document.createElement("div");
    var title = document.createElement("strong");
    title.textContent = "Book your interview";
    wrap.appendChild(title);
    wrap.appendChild(document.createElement("br"));
    wrap.appendChild(document.createElement("br"));
    wrap.appendChild(document.createTextNode("Calendar slots coming online soon."));
    wrap.appendChild(document.createElement("br"));
    wrap.appendChild(document.createElement("br"));
    wrap.appendChild(document.createTextNode("Message "));
    var applyStrong = document.createElement("strong");
    applyStrong.textContent = "APPLY";
    wrap.appendChild(applyStrong);
    wrap.appendChild(document.createTextNode(" on "));
    var msgLink = document.createElement("a");
    msgLink.href = c.MESSENGER_URL;
    msgLink.target = "_blank";
    msgLink.rel = "noopener";
    msgLink.textContent = "Messenger";
    wrap.appendChild(msgLink);
    wrap.appendChild(document.createTextNode(" or "));
    var fbLink = document.createElement("a");
    fbLink.href = c.FACEBOOK_PAGE;
    fbLink.target = "_blank";
    fbLink.rel = "noopener";
    fbLink.textContent = "Facebook";
    wrap.appendChild(fbLink);
    wrap.appendChild(document.createTextNode(" — we'll send your slot link."));
    container.appendChild(wrap);
  }

  global.SCC = {
    FALLBACK: FALLBACK,
    SUBMIT_TIMEOUT_MS: SUBMIT_TIMEOUT_MS,
    getConfig: getConfig,
    siteBase: siteBase,
    applyMeta: applyMeta,
    calendarEmbedUrl: calendarEmbedUrl,
    formActionUrl: formActionUrl,
    parseFormSubmitResponse: parseFormSubmitResponse,
    storageGet: storageGet,
    storageSet: storageSet,
    submitApplication: submitApplication,
    isValidBirthYear: isValidBirthYear,
    setCalendarFallback: setCalendarFallback
  };
})(window);
