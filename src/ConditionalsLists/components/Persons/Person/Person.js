import React from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../../hoc/Aux";
import withClass from "../../../../hoc/withClass";

class Person extends React.Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.PropsTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
