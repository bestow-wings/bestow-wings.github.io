import { useState } from 'react';
import { generateStakeholderData } from './data/stakeholderData'

import StakeholderCard from "../components/StakeholderCard"

import "./styles/stakeholdermanager.css"

function StakeholderManager() {

  const [email, setEmail] = useState("");

  const [stakeholderData, setStakeholderData] = useState(generateStakeholderData());

  const [newName, setName] = useState("");
  const [newOrganisation, setOrganisation] = useState("");
  const [newRole, setRole] = useState("");

  const [detailName, setDetailName] = useState("Dylan Williamson");
  const [detailOrganisations, setDetailOrganisations] = useState([{name:"BHP", role:"Project Manager"}]);
  const [detailRelationshipOwner, setDetailRelationshipOwner] = useState("Kelsy Williamson-Hill");

  const [showAddStakeholderForm, setShowAddStakeholderForm] = useState(false);

  const changeStakeholderDetail = (stakeholder) => {
    setDetailName(stakeholder.name);
    setDetailOrganisations(stakeholder.organisations);
    setDetailRelationshipOwner(stakeholder.relationshipOwner)
  }

  const handleChangeEmail = (event) => {setEmail(event.target.value);}
  const handleNewName = (event) => {setName(event.target.value);}
  const handleNewOrganisation = (event) => {setOrganisation(event.target.value);}
  const handleNewRole = (event) => {setRole(event.target.value);}

  const handleAddStakeholderBtn = (event) => {setShowAddStakeholderForm(!showAddStakeholderForm);}

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(email); // just to get the warning to shush
  }  
  const addStakeholder = (event) => {
    event.preventDefault();
    handleAddStakeholderBtn();
    
    stakeholderData.push({
      name: newName,
      organisations:[
        {
          name: newOrganisation,
          role: newRole
        }
      ],
      relationshipOwner: "Unknown"
    })
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
              onChange={handleNewName}
            />
            <input
              type="text"
              placeholder="Organisation"
              onChange={handleNewOrganisation}
            />
            <input
              type="text"
              placeholder="Role"
              onChange={handleNewRole}
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
          <StakeholderCard stakeholder={stakeholder} onClickFunc={changeStakeholderDetail}/>
        ))}
      </div>
      <div className = "srm-detail">
          <h1>{detailName}</h1>
          {detailOrganisations.map((detailOrganisations) => (
            <h2>{detailOrganisations.name}, {detailOrganisations.role}</h2>
          ))}
          <h3>Relationship Owner:</h3>
          <p>{detailRelationshipOwner}</p>
      </div>
    </>
  );
}

export default StakeholderManager;