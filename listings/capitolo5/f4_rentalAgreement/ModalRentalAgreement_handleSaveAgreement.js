const handleSaveAgreement = async () => {
  // [...]
  if (rentalAgreement.uuid) {
    await editRentalAgreement(rentalAgreement.uuid, body);
  } else {
    await createRentalAgreement(uuidFacility, body);
  }
  // [...]
};
