const schema = yup.object().shape({
  // [...]
  email: yup.string().matches(regex.email[0], {
    message: regex.email[1],
    excludeEmptyString: true,
  }),
  // [...]
});
