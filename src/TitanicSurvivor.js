import { model } from "@tensorflow/tfjs";
import "./index.css"

const tf = require("@tensorflow/tfjs")

async function generateModel() {
  // Demonstrate that the loaded model also works
  const loadedModel = await tf.loadLayersModel('saved_model/model.json');
  loadedModel.compile({
    optimizer: tf.train.adam(),
    loss: 'sparseCategoricalCrossentropy',
    metrics: ['accuracy']
  })
  console.log("Compiled.");
}

function TitanicSurvivor() {
  generateModel();
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
      </div>
    </div>
  );
}

export default TitanicSurvivor;