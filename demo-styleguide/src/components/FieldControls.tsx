import React from "react";
import "./FieldControls.scss";

function FieldControls() {
  return (
    <>
      <h2 className="mt-5">Field Controls</h2>
      <hr />
      <h3 className="mt-3">Inputs</h3>
      <div className="row mt-3">
        <div className="col-sm-6">
          <label htmlFor="my-input" className="company-label">
            Input
          </label>
          <input
            id="my-input"
            className="company-input"
            placeholder="Optional placeholder"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="my-disabled-input" className="company-label">
            Disabled Input
          </label>
          <input
            disabled
            id="my-disabled-input"
            className="company-input"
            placeholder="Optional placeholder"
          />
        </div>
      </div>
      <h3 className="mt-3">Textareas</h3>
      <div className="row mt-3">
        <div className="col-sm-6">
          <label htmlFor="my-textarea" className="company-label">
            Textarea
          </label>
          <textarea
            id="my-textarea"
            className="company-input"
            placeholder="Optional placeholder"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="my-disabled-textarea" className="company-label">
            No-resize Textarea
          </label>
          <textarea
            id="my-disabled-textarea"
            className="company-input no-resize"
            placeholder="Optional placeholder"
          />
        </div>
      </div>
    </>
  );
}

export default FieldControls;
