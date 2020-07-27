import Sidebar from "./components/sidebar";
import Page from "./components/page";
import Grid from "@material-ui/core/Grid";

import React, { Component } from "react";

class App extends Component {
  state = {
    title: "TITLE",
    text: "",
  };

  handleTitle = (title, text) => {
    console.log(title, text);
    this.setState({
      title: title,
      text: text,
    });
  };

  handle2ndTitle = (scndTitle, scndText) => {
    console.log(scndTitle);
    this.setState({
      title: scndTitle,
      text: scndText,
    });
  };

  handle3rdTitle = (thrdTitle, thrdText) => {
    console.log(thrdTitle);
    this.setState({
      title: thrdTitle,
      text: thrdText,
    });
  };

  addText = (text) => {
    console.log(text);
    this.setState({
      text: text,
    });
  };

  render() {
    const { text, title } = this.state;
    return (
      <Grid container direction="row">
        <Sidebar
          handleTitle={this.handleTitle}
          handle2ndTitle={this.handle2ndTitle}
          handle3rdTitle={this.handle3rdTitle}
          text={this.state.text}
        />
        <Page title={title} text={text} addText={this.addText} />
      </Grid>
    );
  }
}

export default App;
