import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

const rootContainer = document.querySelector('#root');
if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(<App />);
}

// const Hello = (props) => {
//   console.log(props); // props --> an object
//   const { name, job } = props; // <-- destructuring
//   // cosnt name = props.name;
//   // const job = props.job;
//   return
//   <h1>Hello, I am {name} and I am a {job}!!!!!!</h1>;
// };

// class Hello extends React.Component {
//   // extends --> <<(shovel) in ruby
//   render() {
//     const { name, job } = this.props;
//     return (
//       <h1>
//         Hello, I am {name} and I am a {job}!!!!!!
//       </h1>,
//     )
//   }
// }
