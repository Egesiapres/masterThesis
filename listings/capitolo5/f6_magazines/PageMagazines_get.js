const {
  data: magazines,
  isLoading,
  error,
  silent: fetchMagazines,
} = useApi(getMagazines, [], []);
