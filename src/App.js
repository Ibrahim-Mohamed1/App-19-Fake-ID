import React, { Component } from 'react';
import { withData } from './DataProvider';
import "./App.css"

class App extends Component {
  componentDidMount() {
    this.props.getId()
  }
  handleSubmit= () => {
    this.props.getId()
  }
  render() {
    console.log(this.props.id)
    return (
      <div className="container">
      <button onClick={this.handleSubmit}>New ID</button>
      <br/>
        <img src={this.props.id.photo} alt=""/>
        <h1 className="fullName">{this.props.id.name} {this.props.id.surname}<span className="comma">,</span> <span className="age">{this.props.id.age}</span></h1>
        <div className="info">
          <h4>👤 {this.props.id.gender === "female" ? "Female" : "Male"} <span>☻</span> 🌐 {this.props.id.region}</h4>
          <h4>📞 {this.props.id.phone} <span>☻</span> 🎂 {this.props.birthday.mdy}</h4>
          <h4>✉️ {this.props.id.email}</h4>
        </div>
      </div>
    );
  }
}

export default withData(App);