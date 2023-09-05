import './main.css';

// React – c'est l'API qui permettra de gérer les composants.
// Cette ligne importe la bibliothèque React, qui est utilisée pour créer et gérer des composants dans une application web construite avec React.
// Inutile depuis la dernière version de React.
import React from 'react';

// React DOM – c’est l'API qui est responsable de générer les composants dans le DOM.
// Cette ligne importe la partie de la bibliothèque React appelée ReactDOM, qui est responsable de la manipulation du DOM (Document Object Model) pour afficher les composants React dans une application web.
import ReactDOM from 'react-dom/client';

// Cette ligne récupère l'élément HTML avec l'ID "root". Cet élément est l'endroit où le composant React sera affiché dans le DOM de la page web. Le contenu du composant sera inséré à l'intérieur de cet élément.
const rootElement = document.getElementById('root');

// Ici, une racine React est créée en utilisant la méthode createRoot. Une racine React est nécessaire pour les nouvelles versions de React (depuis la version 18) et elle remplace l'utilisation précédente de ReactDOM.render.
const root = ReactDOM.createRoot(rootElement);

// Cette ligne effectue le rendu du composant dans la racine React créée précédemment. Le composant est ici défini en utilisant du JSX (JavaScript XML), une extension de syntaxe qui permet d'écrire des éléments React de manière similaire à du HTML. Dans ce cas, le composant est simplement un élément <h1> contenant le texte "C'est du jsx".

// Ma Carte //

const maCarte = (
  <main className="main">
    <h1> HEDY LAMARR'S TODOS</h1>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" />
    <ul>
      <li> Invent new traffic lights </li>
      <li> Rehearse a movie scene </li>
      <li> Improve the spectrum technology </li>
    </ul>
  </main>
);

//  COMPOSANT //

function Card() {
  return <img src="https://i.imgur.com/yXOvdOSs.jpg" />;
}

function Button() {
  return <button className="button"> Click ME </button>;
}

// Fonction Profil //
function Profil() {
  return (
    <main className="main">
      <h1> HEDY LAMARR'S TODOS</h1>
      <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg" />
      <ul>
        <li> Invent new traffic lights </li>
        <li> Rehearse a movie scene </li>
        <li> Improve the spectrum technology </li>
      </ul>
      <Button />
    </main>
  );
}

//

function Banner() {
  const title = 'Jungle House';
  return <h1> {title.toUpperCase()} </h1>;
}

//

// CARDS //

function Panier() {
  const Monstera = 8;
  const Lierre = 45;
  const Fleurs = 18;
  return (
    <>
      <h1> PANIER </h1>
      <ul>
        <li> Montsera {Monstera} euros </li>
        <li> Lierre {Lierre} euros </li>
        <li> Fleurs {Fleurs} euros </li>
      </ul>
      <h2> Total = {Monstera + Lierre + Fleurs} </h2>
    </>
  );
}

// PROPS 1 //

function User(props){
  return (
  <div> Hi my name is {props.name} ! je suis en {props.classe} </div>)
}

// PROPS 2 //

function User2(props) {
  return (
    <section>
      <p> Hi, my name is {props.name} </p>
      <p> Age = {props.age} </p>
      <img src={props.avatar} alt={props.name2} />
    </section>
  );
}

function App(){
  return(
    <>
     <User2 name="Simon" /> 
     <User2 age="MMI" />
     <User2 avatar="https://i.imgur.com/yXOvdOSs.jpg" />
     <User2 name2="image" />
  </>
  )
}

// RENDER //

root.render(
  <>
    <User2 name="Simon" age="MMI" avatar="https://i.imgur.com/yXOvdOSs.jpg" name2="photo" />
  </>
);
