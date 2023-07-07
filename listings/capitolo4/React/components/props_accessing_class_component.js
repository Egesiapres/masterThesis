export class NestedComponent extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.example}</h1>
        <button onClick={this.props.handleClick}>Click here!</button>
      </>
    );
  }
}
