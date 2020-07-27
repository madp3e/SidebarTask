import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Filter2TwoToneIcon from "@material-ui/icons/Filter2TwoTone";
import Filter3TwoToneIcon from "@material-ui/icons/Filter3TwoTone";
import { v4 as uuidv4 } from "uuid";

class Sidebar extends Component {
  state = {
    items: [
      {
        name: "MAIN MENU",
        label: "MAIN MENU",
        id: uuidv4(),
        text: "MAIN MENU TEXT",
        subcomps1: [
          {
            name: "2ND MENU",
            label: "2ND MENU",
            id: uuidv4(),
            text: "2ND MENU TEXT",
          },
        ],
        subcomps2: [
          {
            name: "3RD MENU",
            label: "3RD MENU",
            id: uuidv4(),
            text: "3RD MENU TEXT",
          },
        ],
      },
    ],
  };

  handleAdd = (itemName) => {
    console.log(itemName);
    this.setState({
      items: [
        ...this.state.items,
        {
          name: "MAIN MENU",
          label: "MAIN MENU",
          id: uuidv4(),
          text: "main menu text",
          subcomps1: [],
          subcomps2: [],
        },
      ],
    });
  };

  handle2ndAdd = (itemId) => {
    const selectedMain = this.state.items.find(({ id }) => id == itemId);
    const updatedArray = selectedMain.subcomps1.push({
      name: "2ND MENU",
      label: "2ND MENU",
      id: uuidv4(),
      text: "subcomp1 text",
    });
    console.log(selectedMain);
    this.setState({
      items: [...this.state.items],
    });
  };

  handle3rdAdd = (itemId) => {
    const selectedMain = this.state.items.find(({ id }) => id == itemId);
    const updatedArray = selectedMain.subcomps2.push({
      name: "3RD MENU",
      label: "3RD MENU",
      id: uuidv4(),
      text: "subcomp2 text",
    });
    console.log(selectedMain);
    this.setState({
      items: [...this.state.items],
    });
  };

  handleRemove = (id) => {
    console.log(id);
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  render() {
    const style = {
      width: "30%",
      border: "1px solid rgba(0, 0, 0, 0.1)",
    };
    const { items } = this.state;
    return (
      <Grid style={style}>
        <h3 style={{ textAlign: "center" }}>SIDEMENU</h3>
        <List disablePadding>
          {items.map((item) => (
            <Grid key={item.id} container justify="center">
              <Grid item xs={4}>
                <ListItem
                  onClick={() => this.props.handleTitle(item.name, item.text)}
                  button
                >
                  <ListItemText>{item.label}</ListItemText>
                </ListItem>
                {/* Adding subcomp1 items */}
                {item.subcomps1.map((subcomp1) => (
                  <List dense disablePadding>
                    <Grid
                      container
                      direction="column"
                      justify="space-around"
                      alignItems="baseline"
                    >
                      <ListItem
                        onClick={() =>
                          this.props.handle2ndTitle(
                            subcomp1.name,
                            subcomp1.text
                          )
                        }
                        style={{ paddingLeft: "36px" }}
                        button
                      >
                        <ListItemText>{subcomp1.label}</ListItemText>
                      </ListItem>
                    </Grid>
                  </List>
                ))}
                {/*Adding subcomp2 items */}
                {item.subcomps2.map((subcomp2) => (
                  <List dense disablePadding>
                    <ListItem
                      onClick={() =>
                        this.props.handle3rdTitle(subcomp2.name, subcomp2.text)
                      }
                      style={{ paddingLeft: "46px" }}
                      button
                    >
                      <ListItemText>{subcomp2.label}</ListItemText>
                    </ListItem>
                  </List>
                ))}
              </Grid>
              <Grid container item xs={7}>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="baseline"
                >
                  <Button onClick={() => this.handleAdd(item.name)}>
                    <AddIcon />
                  </Button>
                  <Button onClick={(e) => this.handle2ndAdd(item.id, e)}>
                    <Filter2TwoToneIcon />
                  </Button>
                  <Button onClick={(e) => this.handle3rdAdd(item.id, e)}>
                    <Filter3TwoToneIcon />
                  </Button>
                  <IconButton
                    onClick={() => this.handleRemove(item.id)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </List>
      </Grid>
    );
  }
}

export default Sidebar;
