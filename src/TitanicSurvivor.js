import { useState } from 'react';

import "./index.css"

const tf = require("@tensorflow/tfjs")

function findLargestValueIndex(someArray) {
  var ret = 0;
  for (let i = 1; i < someArray.length; i++) {
    if (someArray[i] < someArray[ret]) {
      ret = i;
    }
  }
  return ret;
}

function parsePreds (index) {
  const survived =  index && 0;
  if (survived) { return "Yes" }
  else { return "No" }
}

async function loadModel() {
  // Demonstrate that the loaded model also works
  const loadedModel = await tf.loadLayersModel('saved_model/model.json');
  loadedModel.compile({
    optimizer: tf.train.adam(),
    loss: 'sparseCategoricalCrossentropy',
    metrics: ['accuracy'] 
  })

  return loadedModel;
}

async function predictSurvival(model, stateMethod, args) {
  var pred = await model.predict(tf.tensor([[3, 2, -1  , 0, 0, 7.2291999  , 1]])).dataSync();
  stateMethod(parsePreds(findLargestValueIndex(pred)));  
}

function TitanicSurvivor() {

  const [survived, setSurvived] = useState("Waiting");

  loadModel().then((model) => predictSurvival(model, setSurvived, {}));

  return (
    <div className = "titanic-survivor">
      <div className = "titanic-survivor-heading">
        <h1>Titanic Survivor</h1>
      </div>
      <div className = "titanic-survivor-ul">
        <ul>
          <li>Age</li>
          <li>Pclass</li>
          <li>Sex</li>
          <li>Fare</li>
          <li>SibSp</li>
          <li>Parch</li>
          <li>Embarked</li>
        </ul>
        <p>{survived}</p>
      </div>
    </div>
  );
}

export default TitanicSurvivor;