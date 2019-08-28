
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      guests: [],
      newGuestName: "",
      newGuestLast: "",
    }
  }
  updateGuestName (event) {
    this.setState({
      newGuestName: event.target.value
    })
  }  
  updateGuestLast (event) {
    this.setState({
      newGuestLast: event.target.value
    })
  }
  handleSubmit = (e) =>{
    var taskId = this.state.guests.length + 1
    this.setState({
      guests: this.state.guests.concat({id: taskId, name: this.state.newGuestName, last: this.state.newGuestLast}),
      newGuestName: "",
      newGuestLast: "",
    })
    e.preventDefault();
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" value={this.state.newGuestName} onChange={this.updateGuestName.bind(this)}  className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" value={this.state.newGuestLast} onChange={this.updateGuestLast.bind(this)} className="form-control" name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
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
                {this.state.guests.map((guest, index) => <tr> <td>{guest.name}</td> <td>{guest.last}</td></tr>)}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    )
  }
}

export default App
