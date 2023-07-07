<Dialog>
  {/* [...] */}
  <Grid>
    <Grid item xs={12} sx={{ mb: -2 }}>
      <Typography variant="subtitle2">Visibilita</Typography>
    </Grid>

    <Grid item xs={12}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={website_visibility}
              onChange={e => setWebsiteVisibility(e.target.checked)}
            />
          }
          label="Struttura visibile su sito web"
        />
      </FormGroup>
    </Grid>
  </Grid>
  {/* [...] */}
</Dialog>;
