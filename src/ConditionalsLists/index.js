import React, { Component } from "react";

import classes from "../App.css";
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
    const person = { ...this.state.persons[personIndex] }; // so that the state don't mutate

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
    let persons = null;
    let btnClass = "";

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
      btnClass = classes.Red;
    }

    const toggleClasses = [];
    if (this.state.persons.length <= 2) {
      toggleClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      toggleClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <p className={toggleClasses.join(" ")}>This is Magic Stuff</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>
        {persons}
      </div>
    );
  }
}

export default ConditionalLists;
