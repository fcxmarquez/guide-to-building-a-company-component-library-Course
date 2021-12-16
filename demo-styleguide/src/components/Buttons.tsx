import React from "react";
import "./Buttons.scss";

function Buttons() {
  return (
    <>
      <h2 className="mt-5">Buttons</h2>
      <hr />
      <h3 className="mt-3">Variants</h3>
      <div className="row mt-3">
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--secondary">
            Secondary
          </button>
        </div>
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--primary">
            Primary
          </button>
        </div>
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--danger">
            Danger
          </button>
        </div>
      </div>
      <h3 className="mt-3">Disabled</h3>
      <div className="row mt-3">
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--secondary" disabled>
            Secondary [disabled]
          </button>
        </div>
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--primary" disabled>
            Primary [disabled]
          </button>
        </div>
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--danger" disabled>
            Danger [disabled]
          </button>
        </div>
      </div>
      <h3 className="mt-3">Sizes</h3>
      <div className="row mt-3">
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--secondary company-button--small">
            Small
          </button>
        </div>
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--secondary">
            Medium
          </button>
        </div>
        <div className="col-sm-4 text-center">
          <button className="company-button company-button--secondary company-button--large">
            Large
          </button>
        </div>
      </div>
      <h3 className="mt-3">Full-width</h3>
      <div className="row mt-3">
        <div className="col-12">
          <button className="company-button company-button--secondary is-block">
            Full-width button
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
