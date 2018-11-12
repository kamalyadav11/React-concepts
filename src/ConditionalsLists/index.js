import React, { Component } from "react";
import "../App.css";
import Person from "./Person/Person";

class ConditionalLists extends Component {
  state = {
    persons: [
      { id: "weho2", name: "Max", age: 28 },
      { id: "wehsdo2", name: "Manu", age: 29 },
      { id: "wehsdwo2", name: "Steve", age: 26 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={event => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <p className={classes.join(" ")}>This is Magic Stuff</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>
        {persons}
      </div>
    );
  }
}

export default ConditionalLists;
