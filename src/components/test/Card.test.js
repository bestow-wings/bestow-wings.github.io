import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../Card";

// ** REACT TESTING LIBRARY **
// https://testing-library.com/docs/react-testing-library/intro/
// This is the library that React suggests you use, there is other options such as enzyme but they're slowly becoming less used

// Describe normally comes first, allows you to select to only run this test file rather than all + describes what you're testing most of the time
describe("Card Component", () => {
  // 1st test
  // What is the specific test case you're testing for? Given x when the card is x it should return x
  test("Should render the card component with a header and description", () => {
    //   Fake props for test data - should mimic the data your real app would use - if it's been used in more than a specific test you might raise it above instead of re-writing it in every test case
    const testHeading = "Testing";
    const testDescription = "DescriptionDescriptionDescription";

    // This is rendering the card in this test which you can see below
    render(<Card title={testHeading} description={testDescription} />);

    // Screen debug allows you to return what the rendered 'screen' looks like in the test at this current point in time
    // For example:
    //     <body>
    //     <div>
    //       <div
    //         class="card"
    //       >
    //         <h3>
    //           Testing
    //         </h3>
    //         <p>
    //           DescriptionDescriptionDescription
    //         </p>
    //       </div>
    //     </div>
    //   </body>
    screen.debug();

    // As you can see in the above comment we're returning a div with your card component and that card component is fairly simple it just returns a heading/description if it's passed
    // We do need to specifically return these things so we can test them

    // One way to do this is via text, the / /i is a regex pattern and means we don't have to match it via capitalization etc
    const heading = screen.getByText(/testing/i);

    // Another way is via testId - this means we have to make an adjustment to our markup though (Pls check the <p> tag in the Card.js file)
    const description = screen.getByTestId("card-description");

    // Now we're returning the parts of your component that contain variables that are worth testing what do we EXPECT from them?

    // Expect the HEADING to be in the document? This test will pass but the way your code is currently setup even if you do not pass a title the div will likely still be there but the value will be null.. so the test would pass the we'd fail to return the heading component when we selected it above
    expect(heading).toBeInTheDocument();

    // Expect the HEADING to have the text content of ?
    expect(heading).toHaveTextContent(testHeading);
    expect(heading).toHaveTextContent("Testing");

    // You can not do the individual selectors like above and you can do it all inline, but it isn't as clean as the above
    expect(screen.getByText(/testing/i)).toHaveTextContent(testHeading);
  });

  //   2nd test
  it("Should not render a description if it is not passed as props", () => {
    const testHeading = "Testing";

    // Rendering again - no description prop
    render(<Card title={testHeading} />);

    // Difference from the screen.debug above, description is now missing because of the updated markup and we aren't passing the prop
    //     <body>
    //     <div>
    //       <div
    //         class="card"
    //       >
    //         <h3>
    //           Testing
    //         </h3>
    //       </div>
    //     </div>
    //   </body>
    screen.debug();

    // You might notice we're using queryByText now this is because getBy/findBy throw errors when they're unable to locate an element
    const description = screen.queryByText(
      /descriptiondescriptiondescription/i
    );

    // Expect it not to be there
    expect(description).toBeNull();
  });
});

// In general there are a lot of selectors you could look into as well as expect(s) eg. screen.queryByText screen.findByTestId so you can have a look at those after the . it should auto fill so you can scroll through
// The same with the expects on line 89 after expect(description). you should be able to scroll the different expectations of your test case :)
// This is a super super simple example because this components are 'dumb' they don't know anything about whats happening above them, alls they know is to load what they're passed
// Which is actually great because it makes for simple testing which is what we want, if you can't write a test simply it might be the case that your component does too much and needs more separation
