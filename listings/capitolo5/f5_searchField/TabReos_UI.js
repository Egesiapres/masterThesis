const table = {
  title: 'REO',
  action: (
    <>
      <TextField
        sx={{ width: 300, mr: 2 }} size="small" variant="filled"
        label="Filtra per nome o cognome"
        placeholder="Cerca..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: filter.length > 0 ? 'flex' : 'none' }}
            >
              <IconButton onClick={() => setFilter('')}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/* [...] */}
    </>
  ),
  // [...]
  rows: filtered.map(
    // [...]
  ),
};
