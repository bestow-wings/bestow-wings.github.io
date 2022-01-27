import { useState } from 'react';
import { generateStakeholderData, blankStakeholder } from './data/stakeholderData'

import StakeholderCard from "../components/StakeholderCard"

import "./styles/stakeholdermanager.css"

function StakeholderManager() {

  const [email, setEmail] = useState("");

  const [stakeholderData, setStakeholderData] = useState(generateStakeholderData());

  const [newStakeholder, setNewStakeholder] = useState(blankStakeholder());
  const [detailStakeholder, setDetailStakeholder] = useState(stakeholderData[0]);

  const [showAddStakeholderForm, setShowAddStakeholderForm] = useState(false);
  const [showEditStakeholderForm, setShowEditStakeholderForm] = useState(false);

  const handleChangeEmail = (event) => {setEmail(event.target.value);}

  const handleChangeNewStakeholder = (e) => {
    if (e.target.placeholder.toLowerCase() === "organisation") {
      newStakeholder["organisations"][0]["name"] = e.target.value;
    } else if(e.target.placeholder.toLowerCase() === "role") {
      newStakeholder["organisations"][0]["role"] = e.target.value;
    } else if (e.target.placeholder.toLowerCase() === "relationship owner") {
      newStakeholder["relationshipOwner"] = e.target.value;
    } else {
      newStakeholder[e.target.placeholder.toLowerCase()] = e.target.value;
    }
  }

  const handleChangeDetailStakeholder = (e) => {
    
    const updatedStakeholder = detailStakeholder;

    if (e.target.id === "organisation") {
      updatedStakeholder["organisations"][0]["name"] = e.target.value;
    } else if(e.target.id  === "role") {
      updatedStakeholder["organisations"][0]["role"] = e.target.value;
    } else if (e.target.id  === "relationshipOwner") {
      updatedStakeholder["relationshipOwner"] = e.target.value;
    } else if (e.target.id === "name") {
      updatedStakeholder[e.target.id] = e.target.value;
    }

    setDetailStakeholder(updatedStakeholder);
  }

  const saveEditedStakeholder = (e) => {
    e.preventDefault();
    setShowEditStakeholderForm(!showEditStakeholderForm);

    for (var index in stakeholderData) {
      if (detailStakeholder.key === stakeholderData[index].key) {
        const newStakeholderData = stakeholderData.slice();
        newStakeholderData[index] = detailStakeholder;
        setStakeholderData(newStakeholderData)
        break;
      }
    }
  }

  const handleAddStakeholderBtn = (event) => {setShowAddStakeholderForm(!showAddStakeholderForm);}

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(email); // just to get the warning to shush
  }  
  
  const addStakeholder = (event) => {
    event.preventDefault();
    handleAddStakeholderBtn();
    
    stakeholderData.push(newStakeholder)
    setNewStakeholder(blankStakeholder());
  }


  return (
    <>
      <div className="srm-banner">
        <h1>stakeholder manager</h1>
        <p>A stakeholder management system that doesn't treat stakeholders like customers.</p>
        <form onSubmit={handleSubmit}>
          <input
          type = "text"
          placeholder="Sign up with your email now"
          onChange={handleChangeEmail}
          />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
      <div className="srm-functions">
        {showAddStakeholderForm ? (
          <form onSubmit={addStakeholder}>
            <input
              type="text"
              placeholder="Name"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Organisation"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Role"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Relationship Owner"
              onChange={handleChangeNewStakeholder}
            />
            <div className="srm-add-stakeholder-btns">
              <button type="submit" value="Submit">Submit</button>
              <button onClick={handleAddStakeholderBtn}>Cancel</button>
            </div>
          </form>
        ) : <button onClick={handleAddStakeholderBtn}>Add Stakeholder</button>}
      </div>
      <div className="srm-cards">
        {stakeholderData.map((stakeholder) => (
          <StakeholderCard stakeholder={stakeholder} onClickFunc={setDetailStakeholder}/>
        ))}
      </div>
        <div className = "srm-detail">
            <div className="srm-detail-form">
            {showEditStakeholderForm ? (
            <form>
              <input
              type="text"
              id="name"
              placeholder="Name"
              defaultValue={detailStakeholder.name}
              onChange={handleChangeDetailStakeholder}
              />
              <input
              type="text"
              id="organisations"
              placeholder="Organisation"
              defaultValue={detailStakeholder.organisations[0].name}
              onChange={handleChangeDetailStakeholder}
              />
              <input
              type="text"
              id="role"
              placeholder="Role"
              defaultValue={detailStakeholder.organisations[0].role}
              onChange={handleChangeDetailStakeholder}
              />
              <input
              type="text"
              id="relationshipOwner"
              placeholder="Relationship Owner"
              defaultValue={detailStakeholder.relationshipOwner}
              onChange={handleChangeDetailStakeholder}
              />
              <div className="srm-add-stakeholder-btns">
                <button onClick={saveEditedStakeholder}>Save</button>
                <button onClick={()=>setShowEditStakeholderForm(!showEditStakeholderForm)}>Cancel</button>
              </div>
            </form>
            ) : 
            <>
            <h1>{detailStakeholder.name}</h1>
            {detailStakeholder.organisations.map((o) => (
              <h2>{o.name}, {o.role}</h2>
            ))}
            <h3>Relationship Owner:</h3>
            <p>{detailStakeholder["relationshipOwner"]}</p>

              <button 
              style={{width:"min-content", marginTop:"1vh"}}
              onClick={()=>setShowEditStakeholderForm(!showEditStakeholderForm)}
            >Edit</button>
            </>
      }
        </div> 
      </div>
    </>
  );
}

export default StakeholderManager;