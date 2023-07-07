const table = {
  title: 'Magazine', noResults: 'Nessun magazine trovato',
  action: (
    <>
      <TextField
        sx={{ width: 300, mr: 2 }}
        size="small" variant="filled" label="Filtra per nome" 
        placeholder="Cerca..." value={filterName}
        onChange={e => setFilterName(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: filterName.length > 0 ? 'flex' : 'none' }}
            >
              <IconButton onClick={() => setFilterName('')}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained" onClick={modalMagazine.open}
        startIcon={<AddIcon />}
      >
        Magazine
      </Button>
    </>
  ),
  isLoading, error, filter, perPage: 10,
  headers: {
    title: { label: 'Titolo', sort: false },
    description: { label: 'Descrizione', sort: false },
    date: { label: 'Data' },
    image: { label: 'Immagine', sort: false },
    document: { label: 'Documento', sort: false },
    delete: { label: '', sort: false, width: 40 },
  },
  rows: filtered.map(el => ({
    key: el.uuid, title: el.title,
    description: <Box dangerouslySetInnerHTML={{ __html: el.description }} />,
    date: format(new Date(el.date), 'dd/MM/yyyy'),
    image: <Image el={el} />,
    document: (
      <DownloadDocument
        action={el.document.name} storage="marketing"
        path={el.document.files[0].path}
      />
    ),
    delete: (
      <IconButton onClick={() => handleDeleteMagazine(el)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    ),
  })),
};