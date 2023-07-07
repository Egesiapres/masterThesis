const filtered = useMemo(() => {
  const _filter = filter.toLowerCase().trim();

  let filtered = [...reos];

  if (_filter.length > 0) {
    filtered = filtered.filter(
      el =>
        `${el.name} ${el.surname}`.toLowerCase().includes(_filter) ||
        `${el.surname} ${el.name}`.toLowerCase().includes(_filter)
    );
  }

  return filtered;
}, [reos, filter]);
