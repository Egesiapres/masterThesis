export function FunctionComponent() {  
  const handleClick = () => {
    console.log('click done');
  };

  return (
    <NestedComponent
      example="example"
      handleClick={handleClick}
    />
  );
}
