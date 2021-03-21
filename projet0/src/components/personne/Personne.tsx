import React, { ComponentProps } from 'react';
import AgePersonne from './AgePersonne';
import classes from "./personne.module.css"

function Personne(props: ComponentProps<any>) {
  return (
    <>
      <h1 className={classes.title}> {props.name} </h1>
      <AgePersonne age={props.age}/>
    </>
  );
}

export default Personne;
