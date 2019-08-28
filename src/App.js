import React, { Component } from "react";

let guests = [];
let initialState = {firstName: "", lastName: ""}

class App extends Component {
  state = initialState

  _handleSubmit = e => {
    e.preventDefault();
    guests = [...guests, this.state];
    this.setState(initialState);
  };

  _handleChange = e => {
    const name = e.target.name === "first-name" ? "firstName" : "lastName";
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this._handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this._handleChange}
                  name="first-name"
                  value={this.state.firstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  name="last-name"
                  onChange={this._handleChange}
                  value={this.state.lastName}
                />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">
                  Agregar Invitado
                </button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest, i) => (
                  <tr key={i}>
                    <td>{guest["firstName"]}</td>
                    <td>{guest["lastName"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
