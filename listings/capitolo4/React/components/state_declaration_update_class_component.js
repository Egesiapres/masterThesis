export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { example: 'example1' };
  }

  handleClick() {
    this.setState({ example: 'example2' });
  }

  render() {
    return (
      <>
        <h1>{this.state.example}</h1>
        <button onClick={() => this.handleClick()}>Click here!</button>
      </>
    );
  }
}
