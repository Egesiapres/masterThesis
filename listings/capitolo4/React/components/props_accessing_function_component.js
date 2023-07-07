export function NestedComponent(props) {
  return (
    <>
      <h1>{props.example}</h1>
      <button onClick={props.handleClick}>Click here!</button>
    </>
  );
}
