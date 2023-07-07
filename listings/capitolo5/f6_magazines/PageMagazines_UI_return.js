<Box p={3}>
  <SuperTable table={table} />

  {modalMagazine.isOpen && (
    <ModalMagazine
      modal={modalMagazine} magazine={{}} onSaved={fetchMagazines}
    />
  )}

  {modalConfirmDeleteMagazine.isOpen && (
    <ModalConfirm
      modal={modalConfirmDeleteMagazine}
      title="Eliminazione magazine"
      text="Eliminare il magazine?"
      handleConfirm={handleConfirmDeleteMagazine}
    />
  )}
</Box>;
