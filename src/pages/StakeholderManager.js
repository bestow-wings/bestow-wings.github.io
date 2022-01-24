import { useState } from 'react';

import "./styles/stakeholdermanager.css"

const organisations = [
  "facebook",
  "apple",
  "amazon",
  "netflix",
  "google"
]

const stakeholders = [
  {
    name: "Tim Cook",
    organisations: [
      {
        name: "apple",
        role: "ceo"
      }
    ]
  },
  {
    name: "Mark Zuckerberg",
    organisations: [
      {
        name: "facebook",
        role: "ceo"
      }
    ]
  }
]

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
      <div className="srm-columns">
        <div>
          <h2>Organisation</h2>
        </div>
        <div>
          <h2>Stakeholder</h2>
        </div>
        <div>
          <h2>Information</h2>
        </div>
        <div>
          <h2>Touchpoints</h2>
        </div>
      </div>
    </>
  );
}

export default StakeholderManager;