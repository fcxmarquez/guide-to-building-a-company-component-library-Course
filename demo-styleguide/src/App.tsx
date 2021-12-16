import React from "react";
import Buttons from "./components/Buttons";
import FieldControls from "./components/FieldControls";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            Company Styleguide
          </a>
        </div>
      </nav>
      <main className="container pt-4 pb-4">
        <h1>Components</h1>
        <hr />
        <p>
          These components represent common styling scenarios that can exist
          within a product. It includes:
          <ul>
            <li>
              Custom CSS styles written in{" "}
              <a href="https://sass-lang.com/">sass</a>
            </li>
            <li>
              Global CSS resets provided by{" "}
              <a href="https://getbootstrap.com/docs/5.0/content/reboot/">
                Bootstrap reboot
              </a>
            </li>
            <li>
              Layout and positioning styles provided by{" "}
              <a href="https://getbootstrap.com/docs/5.0/utilities/spacing/">
                Bootstrap spacing and grid
              </a>
            </li>
          </ul>
        </p>
        <Buttons />
        <FieldControls />
      </main>
    </>
  );
}

export default App;
