import { useState } from 'react';

function ShoppingListGenerator() {

  const [newEmail, setNewEmail] = useState("");

  const handleChangeEmail = (e) => {setNewEmail(e.target.value);}

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div className="srm-banner">
        <h1>shopping list generator</h1>
        <p>Pick your meals and autofill your Coles or Woolworths shopping trolley.</p>
        <form onSubmit={handleSubmit}>
          <input
          type = "text"
          placeholder="Sign up with your email now"
          onChange={handleChangeEmail}
          />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ShoppingListGenerator;