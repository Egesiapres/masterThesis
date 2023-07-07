const [filtered, setFiltered] = useState([]);

const [filterName, setFilterName] = useState('');

useEffect(() => {
  let _filtered = [...magazines];
  let _filterName = filterName.toLowerCase().trim();

  if (_filterName.length > 0) {
    _filtered = _filtered.filter(
      el => el.title.toLowerCase().indexOf(_filterName) > -1
    );
  }

  setFiltered(_filtered);
}, [filterName, magazines]);

const filter = [filterName.length > 0 && 'titolo'].filter(el => el).join(', ');
