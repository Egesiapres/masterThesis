<Dialog
  open={modal.isOpen} onClose={modal.close}
  scroll="body" fullWidth maxWidth="xs"
>
  <DialogTitle>
    Magazine <ModalCloseButton modal={modal} />
  </DialogTitle>

  <DialogContent>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          required fullWidth variant="filled"
          label="Titolo" placeholder="Titolo" value={title}
          {...validationProps('title', setTitle)}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          Descrizione
        </Typography>
      </Grid>
      
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ mb: 1 }}>
          <MUIRichTextEditor
            {...getEditorParams(
              descriptionRef, description, setDescription
            )}
            controls={defaultControlsWithLink}
          />
        </Paper>

        {!validation.description.valid && (
          <FormHelperText
            style={{ marginTop: '.5rem' }}
            error={!validation.description.valid}
          >{validation.description.error}</FormHelperText>
        )}
      </Grid>

      <Grid item xs={12}>
        <DatePicker
          label="Data" value={date}
          onChange={date => {
            setDate(date);
            validateField('date', date);
          }}
          renderInput={params => (
            <TextField
              {...params} fullWidth required variant="filled"
              {...validationProps('date')}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Immagine
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Alt immagine
        </Typography>
        <TextField
          sx={{ my: 1 }}
          required fullWidth variant="filled"
          label="Alt immagine" placeholder="Alt immagine"
          value={image_alt} 
          {...validationProps('image_alt', setImageAlt)}
        />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Carica immagine
        </Typography>
        <Upload
          file={image} setFile={setImage}
          label="Trascina qui l'immagine"
        />
        {!validation.image.valid && (
          <FormHelperText
            style={{ marginTop: '.5rem' }} 
            error={!validation.image.valid}
          >{validation.image.error}</FormHelperText>
        )}
      </Grid>

      <Grid>
        {/* [...] */}
      </Grid>
    </Grid>
  </DialogContent>

  <Error error={status.error} />
  
  <DialogActions>
    <Button onClick={modal.close}>Annulla</Button>

    <LoadingButton onClick={onClick} loading={status.isLoading}>
      Conferma
    </LoadingButton>
  </DialogActions>
</Dialog>