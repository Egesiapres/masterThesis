const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  date: yup.date().typeError('Data non valida').required(),
  image_alt: yup.string().required(),
  image: yup.mixed().nullable(true).required("Seleziona un'immagine"),
  doc_name: yup.string().required(),
  doc: yup.mixed().nullable(true).required('Seleziona un documento'),
});