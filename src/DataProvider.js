import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
  constructor() {
    super()
    this.state = {
      id: [],
      birthday: ''
    }
  }

  getId = () => {
    axios.get(`https://uinames.com/api/?region=united states&ext`).then(res => {
      this.setState({
        id: res.data,
        birthday: res.data.birthday
      })
    }).catch(function (error) {
      window.location.reload()
    });
  }

  render() {
    return (
      <Provider value={{
        getId: this.getId,
        ...this.state
      }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default DataProvider;

export function withData(C) {
  return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}