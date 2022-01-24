import "../pages/styles/stakeholdermanager.css"

const StakeholderCard = ({ name, organisations}) => {
  return (
          <div className="srm-card">
            <h3>{name}</h3>
            {organisations.map((organisations) =>
              <>
                <p>{organisations.name}, {organisations.role}</p>
              </>
            )}
          </div>
  );
};

export default StakeholderCard;