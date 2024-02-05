/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import animals, { useAnimals } from './components/Data.js';

import cars from './components/Practice.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

root.render(
  <table border={1}>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);

// console.log(animals);

// const [cat, dog] = animals;

// const cat = animals[0];
// const dog = animals[1];

// console.log(cat);
// console.log(dog);

// const { name: catName, sound: catSound } = cat;

// const {
//   name: catName,
//   sound: catSound,
//   feedingRequirements: { food, water },
// } = cat;

// const {
//   feedingRequirements: { food: catFood, water: catWater },
// } = cat;

// console.log(catName);
// console.log(catSound);
// console.log(catFood);
// console.log(catWater);

// IMPLEMENTATION OF useState HOOK :

// const [cat, dog] = animals;

// eslint-disable-next-line react-hooks/rules-of-hooks
// console.log(useAnimals(cat));

// const [animal, makeSound] = useAnimals(cat);

// console.log(animal);
