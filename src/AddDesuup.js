import React, { useState } from "react";
import axios from "axios";

export const AddDesuup = () => {
  const [formToggle, setFormToggle] = useState(false);

  const [name, setName] = useState();
  const [age, setAge] = useState();

  const saveDesuup = async () => {
    if (name === "" && age === "") {
      alert("Please enter name and age");
    } else {
      await axios
        .post("http://localhost:3000/newdesuung", {
          name: name,
          age: age
      
        })
        .then(function (response) {
          alert("saved Successfully");
          window.location.reload();
          console.log(response);
        })
        .catch(function (error) {
          alert("Error saving Desuup detail");
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div class="row">
        <div className="col-md-12">
          <div
            style={{
              textAlign: "right"
            }}
          >
            <button
              className="btn btn-warning"
              onClick={() => setFormToggle(true)}
            >
              New
            </button>
          </div>
        </div>
      </div>
      <br />
      {formToggle && (
        <div class="row">
          <div className="col-md-12">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div class="col text-right">
                <button
                  className="btn btn-success"
                  onClick={() => saveDesuup()}
                >
                  Submit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => setFormToggle(!formToggle)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
