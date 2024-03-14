import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { MyComponent } from './App';

//il metodo createRoot chiede un HTMLElement e nel dom con Id root mette quel div, fa un mount dell'app dentro al div-Root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//renderizza la roba che viene passata al metodo
root.render(<App />);
//il componente mi diventa come un tag html
//root.render(<MyComponent />);