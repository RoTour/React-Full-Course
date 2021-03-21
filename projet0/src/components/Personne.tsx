import React, { ComponentProps } from 'react';
import AgePersonne from './AgePersonne';

class Personne extends React.Component<ComponentProps<any>> {
  render() {
    return (
      <>
        <h1> {this.props.name} </h1>
        <AgePersonne age={this.props.age}/>
      </>
    );
  }
}

export default Personne;
