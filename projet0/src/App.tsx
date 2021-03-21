import React from 'react';
import logo from './logo.svg';
import Personne from './components/Personne';
import './App.css';


function App() {
  return (
    <>
      <Personne name="Robin TOURNE" age="19"/>
      <Personne name="Dmitrov" age="20"/>
      <Personne name="Pierre" age="42"/>
      <Personne name="Cath" age="19"/>
    </>
);
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
