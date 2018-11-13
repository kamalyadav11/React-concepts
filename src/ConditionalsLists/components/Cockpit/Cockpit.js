import React from "react";

const cockpit = props => {
  return (
    <div>
      <p className={props.toggleClasses.join(" ")}>This is Magic Stuff</p>
      <button className={props.btnClass} onClick={props.togglePersonsHandler}>
        {props.showPersons ? "Hide Persons" : "Show Persons"}
      </button>
    </div>
  );
};

export default cockpit;
