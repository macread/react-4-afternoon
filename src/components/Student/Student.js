import React, { Component } from 'react';
import Axios from 'axios';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount(){
    Axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then ( res=>{ this.setState({studentInfo: res.data}) })
  }

  render() {
    let {first_name, last_name, grade, email} = this.state.studentInfo;
    return (
      <div className="box">
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
      </div>
    )
  }
}