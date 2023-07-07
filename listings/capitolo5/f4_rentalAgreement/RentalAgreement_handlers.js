const handleCreateRentalAgreement = () => {
  modalRentalAgreement.setData({ rentalAgreement: {} });
  modalRentalAgreement.open();
};

const modalConfirmDeleteRentalAgreement = useModal();

const handleDeleteRentalAgreement = rentalAgreement => {
  modalConfirmDeleteRentalAgreement.setData({ rentalAgreement });
  modalConfirmDeleteRentalAgreement.open();
};
