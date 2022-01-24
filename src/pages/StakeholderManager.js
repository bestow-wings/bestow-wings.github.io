import { useState } from 'react';
import { generateSstakeholderData } from './data/stakeholderData'

import StakeholderCard from "../components/StakeholderCard"

import "./styles/stakeholdermanager.css"

const stakeholderData = generateSstakeholderData();

function StakeholderManager() {

  const [email, setEmail] = useState("");

  const handleChangeEmail = (event) => {setEmail(event.target.value);}
  const handleSubmit = (event) => {event.preventDefault();}

  return (
    <>
      <div class="srm-banner">
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
      <div className="srm-cards">
        {stakeholderData.map((stakeholderData) => (
            <StakeholderCard name={stakeholderData.name} organisations={stakeholderData.organisations} />
        ))}
      </div>
    </>
  );
}

export default StakeholderManager;