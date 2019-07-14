import React, { Component } from "react";

class VegList extends Component {
  state = {
    edit: false,
    id: null,
    mockData: [
      { id: "1", name: "Carrot", eaten: false, date: new Date() },
      { id: "2", name: "Onion", eaten: false, date: new Date() },
      { id: "3", name: "Artichoke", eaten: false, date: new Date() },
      { id: "4", name: "Radish", eaten: false, date: new Date() }
    ]
  };

  onSubmitHandle(e) {
    e.preventDefault();
    this.setState({
      mockData: [
        ...this.state.mockData,
        {
          id: Date.now(),
          name: e.target.item.value,
          eaten: false,
          date: new Date()
        }
      ]
    });
    e.target.item.value = "";
  }

  onEditHandle(e) {
    this.setState({ edit: true, id: arguments[0], name: arguments[1] });
  }

  onUpdateHandle(e) {
    e.preventDefault();
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item["name"] = e.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });
    this.setState({ edit: false });
  }

  onDeleteHandle(e) {
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  onCompleteHandle(e) {
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item["eaten"] = true;
          return item;
        }
      })
    });
  }

  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={this.state.title}
          />
          <button className="update-add-item">Update</button>
        </form>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>I am the VegList Component</h2>
        {this.renderEditForm()}
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id} className={item.eaten ? "eaten" : "hidden"}>
              {item.name + " "}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.name)}
              >
                Edit
              </button>
              <button onClick={this.onCompleteHandle}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default VegList;
