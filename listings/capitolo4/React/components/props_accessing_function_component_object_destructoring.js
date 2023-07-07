export function NestedComponent({ example, handleClick }) {
  return (
    <>
      <h1>{example}</h1>
      <button onClick={handleClick}>Click here!</button>
    </>
  );
}
