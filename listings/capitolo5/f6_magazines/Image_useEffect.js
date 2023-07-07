useEffect(() => {
  if (el) {
    Storage.get(el.image.path).then(url => {
      setImage(url);
    });
  }
}, [el]);