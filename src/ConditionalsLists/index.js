import React, { Component } from "react";
import "../App.css";
import Person from "./Person/Person";

class ConditionalLists extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Steve", age: 26 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Steve", age: 26 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    this.state.persons.splice(personIndex, 1);
    this.setState({ persons: this.state.persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
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
              key={person.name}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <button style={style} onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>
        {persons}
      </div>
    );
  }
}

export default ConditionalLists;
