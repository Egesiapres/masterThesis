<Dialog>
  {/* [...] */}
  <Grid
    item xs={12} md={6}
  >
    <TextField
      fullWidth
      variant="filled"
      label="E-mail"
      placeholder="E-mail"
      value={email}
      {...validationProps('email', setEmail)}
    />
  </Grid>
  {/* [...] */}
</Dialog>;
