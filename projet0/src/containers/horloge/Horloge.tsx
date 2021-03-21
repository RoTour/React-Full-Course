import React, { Component } from 'react';
import classes from './horloge.module.css';


class Horloge extends Component<any, any> {
  state = {
    date: new Date(),
    compteur: 0,
  }
  timer: number | undefined

  private tick = () => {
    this.setState((oldState: any) => {
      return {
        date: new Date(),
        compteur: oldState.compteur + 1,
      }
    });
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.tick(), 1000)
    setTimeout(() => window.clearInterval(this.timer), 10000)
  }

  componentWillUnmount() {
    console.log('STOP');
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h2 className={classes.title}>Horloge: {this.state.date.toLocaleTimeString()}</h2>
        <h3>Compteur: {this.state.compteur}</h3>
      </>
    );
  }
}

export default Horloge;
