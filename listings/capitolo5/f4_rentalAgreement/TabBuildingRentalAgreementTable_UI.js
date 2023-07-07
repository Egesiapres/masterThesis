<>
  <TableRow>
    <TableCell>
      <Typography variant="subtitle2">
        {el.type.label ? el.type.label : '-'}
      </Typography>
    </TableCell>

    <TableCell align="right">{el.archived && `(archiviato)`}</TableCell>

    <TableCell>
      <Button
        sx={{ ml: 8, mr: 2 }} size="small"
        onClick={handleOpenRentalAgreement}
        startIcon={
          toggleOpen ? (
            <KeyboardArrowUpIcon fontSize="inherit" />
          ) : (
            <KeyboardArrowDownIcon fontSize="inherit" />
          )
        }
      >
        Mostra
      </Button>
    </TableCell>

    <TableCell>
      <IconButton
        size="small"
        onClick={() => handleEditRentalAgreement(el)}
      >
        <EditIcon fontSize="inherit" />
      </IconButton>

      <IconButton
        size="small" onClick={() => handleDeleteRentalAgreement(el)}
      >
        <ArchiveIcon fontSize="inherit" />
      </IconButton>
    </TableCell>
  </TableRow>

  <TableRow>
    <TableCell sx={{ p: toggleOpen ? 1 : 0 }} colSpan={4}>
      <Collapse in={toggleOpen} timeout="auto" unmountOnExit>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              {/* [...] */}
              <TableRow>
                <TableCell>Note</TableCell>
                <TableCell>{el.renewal_note || '-'}</TableCell>
              </TableRow>
              {/* [...] */}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </TableCell>
  </TableRow>
</>;
