import "../index.css";

const Card = ({ title, description, imgsrc, link }) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      className="card-image"
      style={{ backgroundImage: `url("${imgsrc}")` }}
    >
      <div className="card-background">
        <div className="card-text">
          <h3>{title}</h3>
          {/* Updated for the test, the data-testid is another way for a test to select an element, it means adding to your markup but if you had multiple text lines with the same data etc it wouldn't work to use 'findbytext' etc, there are many different selectors for you to use and have a look at though */}
          {/* description && you would have seen if / else you can't write that here so you'd need to separate it into a function and call it which is messy */}
          {/* the next option is to use a ternary operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator this allows use to return one of two options based on an outcome as so: */}
          {/* description ? "TRUE" : "FALSE" so here it would return the string true if there was a description and false if there was not, the real solution would be to return the <p> if true if not return "" or null */}
          {/* Thats however messy the NEXT and BEST solution is to say description && this means if description isn't a null type return the what follows in our case the <p>  */}
          {description && <p data-testid="card-description">{description}</p>}
        </div>
      </div>
    </a>
  );
};

export default Card;