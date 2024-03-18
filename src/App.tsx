import { useEffect, useMemo, useState } from 'react';
import Counter from './components/Counter';
import CounterWithObjectState from './components/CounterWithObjectState';
import { MyCustomInput } from './components/MyCustomInput';
import { TextComponent } from './components/TextComponent';
import { PersonInput } from './components/PersonInput';
import { MiddleComponent } from './components/MiddleComponent';
import { IncrementalComponent } from './components/IncrementalComponent';
import { ToDoList } from './components/todolist/ToDoList';
import UserList from './components/client-server/UserList';
import { BrowserRouter, HashRouter, Link, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

function calcolo(n: number) {
  return n * 2;
}

export default function App() {
  // const [text, setText] = useState('');
  // const [value, setValue] = useState(10);

  // // ricalcola questa funzione solo quando cambia value, se no ritorna sempre lo stesso valore che si e salvato in cache la prima volta
  // const risultatoCalcolo = useMemo(() => {
  //   return calcolo(value);
  // }, [value]);

  // React invoca questo effetto solo al montaggio del componente quando la lista di dipendenze e vuota
  // una situazione tipica e un data fetch da un server per caricare i dati
  // il return e l'evento oppost, quando si smonta, tipo render condizionale quando un elemento sparisce
  // useEffect( () => {
  //   console.log('useEffect in mount!');
  //   return () => {
  //     console.log('useEffect unmount effect!');
  //   }
  // }, []);

  // console.log('App()');

  return <>
    {/* qui viene visualizzato cio che passiamo al nostro router */}
    <h1>App</h1>

    <HashRouter>
      <div>
        <Link to={''}>Vai a Home</Link>
        <Link to={'userlist'}>Vai a userList</Link>
        <Link to={'counter'}>Vai a counter</Link>
      </div>
      <Routes>
        <Route path='/' element={<div>Hello world</div>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </HashRouter>
    {/*<div>Risultato calcolo: {risultatoCalcolo}</div>
    <Counter initialValue={value}/>
    <Counter key={value} />
    <button onClick={() => setValue(20)}>Imposta a venti</button>
    <div>value: {value}</div> */}
    {/* <TextComponent/> */}
    {/*
                                                    onChange e la funzione di callBack che passiamo al nostro CustomImput  
                                                    e io da CustomInput gli passo un testo e quando l'utente scrive qualcosa, quella funzione viene chiamata
                                                    e arriva al mio file App cosi posso usare la stringa con la funzione che voglio

                                                    Invocata dentro MyCustomInput, mi viene passato il text che posso usare adesso
     */}
    {/* <MyCustomInput required={true} label={'Nome'} onChange={text => {
      console.log(text);
      setText(text);
    }}/>
    <div>testo in App: {text}</div> */}
    {/* <MyCustomInput required={false} label={'Cognome'}/> */}
    {/* <CounterWithObjectState/> */}

    {/* <PersonInput onSave={ (person) => {
      console.log(person);
    }}/>

    <MiddleComponent onChange={ (person) => {
      console.log(person);
    } }/> */}

    {/* {value !== 20 && <IncrementalComponent />} */}
    {/* <ToDoList /> */}

    {/* <UserList/> */}

  </>
}

//e un component, quindi una funzione che deve avere nel return il codice html da visualizzare nella pagina
//questa sintastti si chiama jsx o tsx (typescript)
//Si fa restituire ai componenti direttamente l'html, anche se non e base
//permette di referenziare variabili tramite le graffe --> {logo}
//export default e uno solo
//una espressione jsx deve restituire solo un elemento
//React.Fragment --> crea un contenitore fittizio che nel dom non si vede, e solo per poter esportare solo un elemento
//React.Fragment == <> </>
// export default function App() {
//   return (<>
//       {/* <MyComponent/> */}
//       {/* <CyclicRenderingComponent/> */}
//       <div className={styles.title}>
//         <img src={logo} alt="logo" />
//         <div>Fitstic</div>
//       </div>
//     </>);
// }

//componenti sempre con maiuscola
//Se return e mono riga posso non mettere parentesi tonde
//le graffe dentro il jsx mi apre il js
export function MyComponent() {
  // function sum(n1: number, n2: number) {
  //   return n1+n2;
  // }
  const sum = (n1: number, n2: number) => {return n1+n2;}

  let num: number = 2;
  let str: string = 'ciao!';
  let bool: boolean = true;

  //Rendering condizionale con variabile d'appoggio
  let val: JSX.Element | null = null;
  if(bool){
    val = <div>bool e true</div>
  }
  else {
    val = <div>bool e false</div>
  }

  let varAppoggio;
  switch(num) {
    case 1: {
      varAppoggio = <div>num e 1</div>
      break;
    }
    case 2: {
      varAppoggio = <div>num e 2</div>
      break;
    }
    case 3: {
      varAppoggio = <div>num e 3</div>
      break;
    }
  }

  let risultatoSomma = sum(2, 2);

  return <div>
    <h2>myComponent!</h2>
    <div>num: {num}</div>
    <div>str: {str}</div>
    <div>bool: {bool+''}</div>
    {val}
    { /*Rendering condizionale con operatore ternario*/ }
    {bool === true
    ? <div>bool e true</div> 
    : <div>bool e false</div>}
    { /* Rendering condizionale senza visualizzare niente se e false */ }
    {bool === true && <div>bool e true</div>}
    {/* null non viene visualizzato */}
    {null}
    {/* switch */}
    {varAppoggio}

    <div>Risultato somma: {risultatoSomma}</div>
    <div>Risultato somma: {sum(4, 4)}</div>
  </div>
  //i booleani non sono visibili tramite jsx, quindi ci appendiamo una str e js lo trasforma in js
}

//Rendering condizionali e rendering ciclici sono le uniche cose che servono per fare un applicativo
//switch non e supportato dentro il jsx, si usa una variabile d'appoggio nella funzione per esempio

export function CyclicRenderingComponent() {
  let array = [2, 4, 6, 7];
  //let arrayJSX = array.map((item, index)=> <div>Num {index}: {item}</div>);
  //key = {index} lo facciamo perche da warning per ogni render ciclico che facciamo, 
  //quindi mettiamo qualcosa di univoco per ogni elemento dell'array, per esemio l'index

  let arrayDiJsx = [];
  for (let i = 0; i < array.length; i++){
    arrayDiJsx.push(<div key={i}>arrayDiJsx posizione {i}: {array[i]}</div>);
  }

  return <>
    <h4>Rendering ciclico</h4>
    {arrayDiJsx}
    {array.map((item, index)=> <div key={index}>Num {index}: {item}</div>)}
  </>
}