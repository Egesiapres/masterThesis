export const createRentalAgreement = (uuid, body) =>
  post(`/facility/${uuid}/rental-agreement`, body, { baseUrl: 'facilities' });

export const deleteRentalAgreement = (uuid, body) =>
  del(`/rental-agreement/${uuid}`, body, { baseUrl: 'facilities' });
