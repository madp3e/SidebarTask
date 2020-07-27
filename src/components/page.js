import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";

class Page extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addText(this.state.text);

    console.log("submited");
  };

  handleTextChange = (e) => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const pageStyle = {
      width: "65%",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      marginLeft: "5px",
    };
    const btnStyle = {
      textAlign: "center",
    };
    const textFieldStyle = {
      marginLeft: "15px",
      marginRight: "30px",
      marginTop: "10px",
      marginBottom: "15px",
    };
    const { text, title, handleTextChange } = this.props;
    return (
      <div style={pageStyle}>
        <div className="title">
          <h2 style={{ textAlign: "center" }}>{title}</h2>
        </div>
        <div style={btnStyle} className="button-list">
          <form onSubmit={this.onSubmit}>
            <Button style={{ marginRight: "2px" }} variant="outlined">
              Edit
            </Button>
            <Button
              style={{ marginLeft: "2px" }}
              variant="outlined"
              color="primary"
              type="submit"
            >
              Save
            </Button>
            <Grid container justify="center" style={textFieldStyle}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={5}
                variant="outlined"
                style={textFieldStyle}
                fullWidth={true}
                onChange={this.handleTextChange}
                defaultValue={text}
              />
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default Page;
