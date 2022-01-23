import { useState } from 'react';
import Gist from 'react-gist';

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
  if (index === 0) { return "Yes!" }
  else { return "No :(" }
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

async function predictSurvival(model, stateMethod, inputs) {
  var pred = await model.predict(tf.tensor(inputs)).dataSync();
  stateMethod(parsePreds(findLargestValueIndex(pred)));  
}

function TitanicSurvivor() {

  // variables
  const [survived, setSurvived] = useState(" ");
  const [age, setAge] = useState(-1);
  const [sex, setSex] = useState(-1);
  const [Pclass, setPclass] = useState(-1);
  const [fare, setFare] = useState(-1);
  const [sibsp, setSibsp] = useState(-1);
  const [parch, setParch] = useState(-1);
  const [embarked, setEmbarked] = useState(-1);

  // variable callback functions
  const handleChangeAge = (event) => {setAge(parseInt(event.target.value))}
  const handleChangeSex = (event) => {setSex(parseInt(event.target.value))}
  const handleChangePclass = (event) => {setPclass(parseInt(event.target.value))}
  const handleChangeFare = (event) => {setFare(parseInt(event.target.value.replace(/[^0-9.-]/g, '')))}
  const handleChangeSibsp = (event) => {setSibsp(parseInt(event.target.value))}
  const handleChangeParch = (event) => {setParch(parseInt(event.target.value))}
  const handleChangeEmbarked = (event) => {setEmbarked(parseInt(event.target.value))}

  const handleSubmit = (event) => {
    event.preventDefault();
    setSurvived("Loading model...");

    const inputs = [[Pclass, sex, age, sibsp, parch, fare, embarked]]

    loadModel().then((model) => predictSurvival(model, setSurvived, inputs))
  }

  return (
    <>
    <div className="titanic-survivor-super">
      <div className = 'titanic-survivor-parent'>
        <div className = "titanic-survivor">
          <div>
            <h1>Titanic Survivor</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input 
                type = "text"
                onChange={handleChangeAge} 
                placeholder = "How old are you?"
              />
              <select onChange={handleChangeSex}>
                <option value={-1} hidden>
                  Sex
                </option>
                <option value={1}>Male</option>
                <option value={2}>Female</option>
              </select>
                <select value={Pclass} onChange={handleChangePclass}>
                  <option value={-1} hidden>
                    What class ticket did you buy?
                  </option>
                  <option value={1}>First Class</option>
                  <option value={2}>Second Class</option>
                  <option value={3}>Third Class</option>
                </select>
                <input
                type = "text"
                placeholder="How much did you pay for your fare?"
                onChange={handleChangeFare}
                />
              <input
                type = "text"
                placeholder="How many of your siblings and/or spouses are travelling with you?"
                onChange={handleChangeSibsp}
                />
              <input
                type = "text"
                placeholder="How many of your parents and/or children are travelling with you?"
                onChange={handleChangeParch}
                />
              <select value={embarked} onChange={handleChangeEmbarked}>
                  <option value={-1} hidden>
                  What port did you board from?
                  </option>
                  <option value={1}>Cherbourg</option>
                  <option value={2}>Queenstown</option>
                  <option value={3}>Southampton</option>
                </select>
                <p></p>
              <button type="submit" value="Submit">Submit</button>
              <p></p>
            </form>
            </div>
            <div className = "titanic-survivor">
              <h3>Would you have survived?</h3>
              <h2>{survived}</h2>
          </div>
        </div>
        <div className = "titanic-survivor">
          <h1>Why is this interesting?</h1>
          <p>This relies on a machine learning algorithm built natively in JavaScript using 
            TensorFlowJS. It was trained on the
            <a href="https://www.kaggle.com/c/titanic/data"> Titanic - Machine Learning 
            from Disaster</a> dataset from Kaggle. This model is about 75% accurate depending
            on the validation dataset. The best models, built by teams of machine learning
            specialists, only get about 81%.</p>
            <p>The source code used to train the model is reproduced below.</p>
            </div>

      </div>
    </div>
    <div style={{width:"1000px", margin:"auto", paddingTop:"2rem"}}>
      <Gist id='787386ded49d2bdf37238d90a895b69c' />
      </div>
    </>
  );
}

export default TitanicSurvivor;