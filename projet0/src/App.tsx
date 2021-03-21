import React from 'react';
import Personne from './components/personne/Personne';
import Horloge from './containers/horloge/Horloge'
import './App.css';


class App extends React.Component {
  state = {
    personnes: [
      {name: "Robin TOURNÉ", age: 19},
      {name: "Dmitrov", age: 20},
      {name: "Pierre", age: 42},
      {name: "Cath", age: 19},
    ]
  }
  render() {
    return (
      <>
        <Horloge/>
        {this.state.personnes.map((it) => {
          return <Personne name={it.name} age={it.age}/>
        })}
      </>
    );
  }
}

// class App extends Component<any, any> {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
