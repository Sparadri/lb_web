export function setLocalStorage(response) {
  localStorage.setItem('access-token', response.headers['access-token']);
  localStorage.setItem('uid', response.headers['uid']);
  localStorage.setItem("token-type", response.headers['token-type']);
  localStorage.setItem("client", response.headers['client']);
  localStorage.setItem("expiry", response.headers['expiry']);

};

export function getLocalStorage() {
  const access_token = localStorage['access-token'];
  const uid          = localStorage['uid'];
  const token_type   = localStorage['token-type'];
  const client       = localStorage['client'];
  const expiry       = localStorage['expiry'];

  const obj           = {};
  obj['access-token'] = access_token;
  obj['uid']          = uid;
  obj['token-type']   = token_type ;
  obj['client']       = client;
  obj['expiry']       = expiry;

  return obj
};
