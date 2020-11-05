import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtNote: "",
      sltGender: 0,
      rdoLanguage: "vi",
      chkbStatus: false,
    };
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container ">
        <div className="card mt-5">
          <h4 className="card-title">Title</h4>
          <div className="card-body">
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label>userName: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtUsername"
                  onChange={this.onHandleChange}
                  value={this.state.txtUsername}
                />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="txtPassword"
                  onChange={this.onHandleChange}
                  value={this.state.txtPassword}
                />
              </div>
              <div className="form-group">
                <label>Note: </label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="txtNote"
                  onChange={this.onHandleChange}
                ></textarea>
              </div>
              <select
                className="form-control mb-4"
                name="sltGender"
                value={this.state.sltGender}
                onChange={this.onHandleChange}
              >
                <option value={0}>Female</option>
                <option value={1}>Male</option>
              </select>
              <div className="radio mb-4">
                <label className="mr-2">
                  <input
                    type="radio"
                    name="rdoLanguage"
                    value="en"
                    onChange={this.onHandleChange}
                    checked={this.state.rdoLanguage === "en"}
                  />
                  English
                </label>
                <label>
                  <input
                    type="radio"
                    name="rdoLanguage"
                    value="vi"
                    onChange={this.onHandleChange}
                    checked={this.state.rdoLanguage === "vi"}
                  />
                  Vietnamese
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="chkbStatus"
                    value={true}
                    onChange={this.onHandleChange}
                    checked={this.state.chkbStatus===true}
                  />
                    active
                </label>
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                save
              </button>
              <button type="reset" className="btn btn-primary">
                reset
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
