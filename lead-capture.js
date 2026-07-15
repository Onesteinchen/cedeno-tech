(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CedenoLeadCapture = api;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ENDPOINT = "https://script.google.com/macros/s/AKfycbwh_jfTdW4ni21YRDG4NMo40ZFqNE9xVPkUNZdJYuamfpMxaJ6XMS6g_s4HL8ZoBEdUaA/exec";

  function clean(value) {
    return String(value == null ? "" : value).trim();
  }

  function buildLeadPayload(fields, context) {
    const source = fields || {};
    const page = context || {};

    return {
      name: clean(source.name),
      email: clean(source.email),
      type: clean(source.type),
      product: clean(source.product),
      message: clean(source.message),
      website: clean(source.website),
      language: clean(page.language) || "en",
      source: clean(page.source)
    };
  }

  async function submitLead(payload, fetchImpl) {
    const send = fetchImpl || fetch;
    const body = new URLSearchParams(payload);

    await send(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      body
    });
  }

  return {
    ENDPOINT,
    buildLeadPayload,
    submitLead
  };
});
