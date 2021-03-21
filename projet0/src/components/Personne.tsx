import React, { ComponentProps } from 'react';
import AgePersonne from './AgePersonne';

function Personne(props: ComponentProps<any>) {
  return (
    <>
      <h1> {props.name} </h1>
      <AgePersonne age={props.age}/>
    </>
  );
}

export default Personne;
