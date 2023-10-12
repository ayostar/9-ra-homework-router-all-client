const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7878';
}

if (url.hostname === 'ayostar.github.io') {
  url.hostname = 'nine-ra-homework-router-authentication.onrender.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const links = {
  root: root.origin,
  auth: new URL('auth', url.href).href,
  private: new URL('private', url.href).href,
};

export default links;
