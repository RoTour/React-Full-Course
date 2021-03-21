import React from 'react';

function AgePersonne(props: { age: string }) {
  const now = new Date().getFullYear();
  return <p> Age: {props.age} - {now-parseInt(props.age)}/{now-parseInt(props.age)-1}</p>;
}

export default AgePersonne;
