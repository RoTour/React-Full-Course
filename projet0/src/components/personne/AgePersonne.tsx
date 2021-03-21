import React from 'react';

function AgePersonne(props: { age: number }) {
  const now = new Date().getFullYear();
  return <p> Age: {props.age} - {now-props.age}/{now-props.age-1}{props.age > 20 ? " - (boomer)" : ""}</p>;
}

export default AgePersonne;
