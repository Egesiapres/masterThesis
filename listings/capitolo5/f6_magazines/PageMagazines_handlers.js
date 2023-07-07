const modalMagazine = useModal();

const modalConfirmDeleteMagazine = useModal();

const handleDeleteMagazine = magazine => {
  modalConfirmDeleteMagazine.setData({ magazine });
  modalConfirmDeleteMagazine.open();
};

const handleConfirmDeleteMagazine = async () => {
  await removeToS3(
    'marketing',
    modalConfirmDeleteMagazine.data.magazine.document.files[0].path
  );

  await removeToS3(
    'marketing',
    modalConfirmDeleteMagazine.data.magazine.image.path
  );

  await deleteMagazine(modalConfirmDeleteMagazine.data.magazine.uuid);

  fetchMagazines();
};
