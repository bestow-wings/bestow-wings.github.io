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
      newStakeholder[e.target.id] = e.target.value;
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
    } else {
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

    var newKey = -1;

    for (let i = 0; i < stakeholderData.length; i++) {
      if (stakeholderData[i].key > newKey) {
        newKey = stakeholderData[i].key;
      }
    }

    newKey++;
    newStakeholder.key = newKey;
    
    stakeholderData.push(newStakeholder)
    setNewStakeholder(blankStakeholder());
  }

  const deleteDetailStakeholder = (event) => {
    const delKey = detailStakeholder.key;
    var newData = stakeholderData;

    for (let i = 0; i < newData.length; i++) {
      console.log(newData[i].key, delKey)
      if (newData[i].key === delKey) {
        newData.splice(delKey, 1);
        break;
      }
    }
    setStakeholderData(newData);
    setDetailStakeholder(stakeholderData[0])
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
              id = "name"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Organisation"
              id="organisation"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Role"
              id="role"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Relationship Owner"
              id="relationshipOwner"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Email Address"
              id="email"
              onChange={handleChangeNewStakeholder}
            />
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              onChange={handleChangeNewStakeholder}
            />
            <div className="srm-add-stakeholder-btns">
              <button type="submit" value="Submit">Submit</button>
              <button onClick={handleAddStakeholderBtn}>Cancel</button>
            </div>
          </form>
        ) : <button onClick={handleAddStakeholderBtn}>Add Stakeholder</button>}
      </div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
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
              <input
              type="text"
              id="email"
              placeholder="email"
              defaultValue={detailStakeholder.email}
              onChange={handleChangeDetailStakeholder}
              />
              <input
              type="text"
              id="phone"
              placeholder="phone"
              defaultValue={detailStakeholder.phone}
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
              <h2>{o.role} at {o.name}</h2>
            ))}
            <h3>Relationship Owner:</h3>
            <p>{detailStakeholder["relationshipOwner"]}</p>
            <h3>Email:</h3><p>{detailStakeholder.email}</p>
            <h3>Phone:</h3><p>{detailStakeholder.phone}</p>

            <div style={{
              display:"flex", 
              justifyContent:"space-evenly", 
              width:"min-content", 
              marginTop:"1vh"
            }}>
              <button 
              style={{width:"6vw"}}
              onClick={()=>setShowEditStakeholderForm(!showEditStakeholderForm)}
              >
                Edit
              </button>
              <button 
              style={{width:"6vw", marginLeft:"1vw"}}
              onClick={deleteDetailStakeholder}
              >
                Delete
              </button>
            </div>
            </>
      }
        </div> 
      </div>
      </div>
    </>
  );
}

export default StakeholderManager;