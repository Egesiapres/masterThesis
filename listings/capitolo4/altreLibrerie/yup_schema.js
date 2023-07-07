const schema = yup.object().shape({
  example1: yup.string().required(),
  example2: yup.boolean(),
  example3: yup.array().min(1, 'Selezionare almeno un valore').required(),
  example4: yup.date().typeError('Data non valida'),
});
