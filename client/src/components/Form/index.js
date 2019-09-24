import React from "react";

function Form ({ q, handleInputChange, handleFormSubmit }) {
    return (
        <from>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong> Book </strong>
                </label>
                <input
                className="form-control"
                id="Title"
                type="text"
                value={q}
                name="q"
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="pull-right">
                <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-warning float-right"
                >
                    Search
                </button>
            </div>
        </from>
    );
}
export default Form;