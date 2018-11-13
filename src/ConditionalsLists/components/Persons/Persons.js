import React from "react";
import Person from "./Person/Person";

class Persons extends React.Component {
  render() {
    return this.props.persons.map((person, index) => (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        click={() => this.props.click(index)}
        changed={event => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
