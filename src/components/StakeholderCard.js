import "../pages/styles/stakeholdermanager.css"

const StakeholderCard = ({ stakeholder, onClickFunc}) => {
  return (
          <div className="srm-card" onClick={() => {onClickFunc(stakeholder)}}>
            <h3>{stakeholder.name}</h3>
            {stakeholder.organisations.map((e) =>
              <>
                 <p>{e.role} at {e.name}</p>
              </>
            )}
          </div>
  );
};

export default StakeholderCard;