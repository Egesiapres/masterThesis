<>
  <Card>
    <CardHeader
      subheader="Contratti locazione"
      action={
        <Button
          size="small" startIcon={<AddIcon />}
          onClick={handleCreateRentalAgreement}
        >
          Aggiungi
        </Button>
      }
    ></CardHeader>

    <Divider />

    <Table size="small">
      <TableBody>
        {rentalAgreements.map(el => (
          <TabBuildingRentalAgreementTable
            key={el.uuid} el={el}
            handleEditRentalAgreement={handleEditRentalAgreement}
            handleDeleteRentalAgreement={handleDeleteRentalAgreement}
          />
        ))}
      </TableBody>
    </Table>
  </Card>
  
  {/* [...] */}
  
  {modalConfirmDeleteRentalAgreement.isOpen && (
    <ModalConfirm
      modal={modalConfirmDeleteRentalAgreement}
      title="Archivia contratto locazione"
      text={`Archiviare il contratto locazione: ${modalConfirmDeleteRentalAgreement.data.rentalAgreement.type.label}?`}
      handleConfirm={handleArchiveConfirmRentalAgreement}
    />
  )}
</>;
