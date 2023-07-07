const onClick = async () => {
  const form = {
    title, description, date, image_alt, image, doc_name, doc,
  };

  if (await validate(form)) {
    try {
      status.setLoading();

      const import_image = await uploadToS3(
        'marketing', image, image_alt, 'magazine'
      );

      const import_doc = await uploadToS3(
        'marketing', doc, doc_name, 'magazine'
      );

      const body = {
        title,
        description: htmlFromRaw(description),
        date,
        image: { ...import_image.file, alt: image_alt },
        document: {
          name: doc_name, date, file: import_doc.file,
        },
      };

      await createMagazine(body);

      status.setSuccess();

      onSaved();

      modal.close();
    } catch (err) {
      status.setError(err);
    }
  }
};
