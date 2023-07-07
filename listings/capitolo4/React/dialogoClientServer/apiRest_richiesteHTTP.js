export const get = async (url, options) =>
  request("GET", url, undefined, options);

export const post = async (url, body, options) =>
  request("POST", url, body, options);

export const put = async (url, body, options) =>
  request("PUT", url, body, options);

export const del = async (url, body, options) =>
  request("DELETE", url, body, options);
