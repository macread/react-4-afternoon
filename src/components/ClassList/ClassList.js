import React, { Component } from 'react';
import Axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then ( res=>{ this.setState({students: res.data}) })
  }

  render() {
    let classList = this.state.students.map( (student, i)=> {
      return (
          <h3 key={student.id}>{student.first_name} {student.last_name}</h3>
      )}
    )

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { classList }
      </div>
    )
  }
}