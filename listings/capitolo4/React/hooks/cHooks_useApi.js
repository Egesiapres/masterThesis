const {
  data: examples,
  isLoading,
  error,
  silent: fetchExamples,
} = useApi(getExamples, [], []);
