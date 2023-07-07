const request = async (method, path, body, options = {}) => {
  // [...]
  const headers = { 'Content-Type': 'application/json' };
  const baseUrl = api[options.baseUrl || 'chc'];
  const url = `${baseUrl}/${env}${path}`;

  const config = {
    url,
    method,
    headers,
    data: body,
    ...options,
  };

  const response = await axios(config);
  return response.data;
};
