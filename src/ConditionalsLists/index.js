import React, { Component } from "react";

import classes from "../App.css";
import Persons from "./components/Persons/Persons";
import Cockpit from "./components/Cockpit/Cockpit";

class ConditionalLists extends Component {
  state = {
    persons: [
      { id: "weho2", name: "Max", age: 28 },
      { id: "wehsdo2", name: "Manu", age: 29 },
      { id: "wehsdwo2", name: "Steve", age: 26 }
    ],
    showPersons: false
  };

  componentDidMount() {
    console.log("I mounted(did)");
  }

  componentWillMount() {
    console.log("I mounted(will)");
  }

  componentWillUpdate() {
    console.log("I updated(will)");
  }

  componentDidUpdate() {
    console.log("I updated(did)");
  }

  componentWillReceiveProps() {
    console.log("recieve props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should?", nextProps, nextState);
    return nextState !== this.props.showPersons;
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

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
    console.log("I am in render");
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      btnClass = classes.Red;
    }

    const toggleClasses = [];
    if (this.state.persons.length <= 2) {
      toggleClasses.push(classes.Red);
    }

    if (this.state.persons.length <= 1) {
      toggleClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <Cockpit
          togglePersonsHandler={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          btnClass={btnClass}
          toggleClasses={toggleClasses}
        />
        {persons}
      </div>
    );
  }
}

export default ConditionalLists;
