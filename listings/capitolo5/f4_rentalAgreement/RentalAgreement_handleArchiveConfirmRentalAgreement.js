const handleArchiveConfirmRentalAgreement = async () => {
  await deleteRentalAgreement(
    modalConfirmDeleteRentalAgreement.data.rentalAgreement.uuid
  );
  fetchRentalAgreements();
};