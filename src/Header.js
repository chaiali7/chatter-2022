import React from "react";

// creates a header react component
// header contains a logo, title, and has interactivity
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "CHATTER!",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidMount() {}
  changeTitle = () => {
    this.setState({ text: "Cool title" });
  };
  render() {
    return (
      <header className="header" onClick={this.changeTitle}>
        <div className="logo" />
        <span className="title">{this.state.text}</span>
      </header>
    );
  }
}