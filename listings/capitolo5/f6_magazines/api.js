export const getMagazines = () => get(`/magazine`, { baseUrl: 'facilities' });

export const createMagazine = body =>
  post(`/magazine`, body, { baseUrl: 'facilities' });

export const deleteMagazine = uuid =>
  del(`/magazine/${uuid}`, undefined, { baseUrl: 'facilities' });