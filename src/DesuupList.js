import React, { useEffect, useState } from "react";
import axios from "axios";

const DesuupDetail = (props) => {
  return (
    <ul class="list-group">
      <li class="list-group-item">{props.desuup.name}</li>
      <li class="list-group-item">{props.desuup.age}</li>
      <li class="list-group-item">{props.desuup.registeredOn}</li>
    </ul>
  );
};

export const DesuupList = () => {
  const [formToggle, setFormToggle] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);

  const [desuupList, setDesuupList] = useState();

  const [selectedDesuup, setSelectedDesuup] = useState();

  const fetchDesuupList = async () => {
    await axios
      .get(`http://localhost:3000/desuung`, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(function (response) {
        // handle success
        setDesuupList(response.data);
        // setWeatherData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    fetchDesuupList();
  }, []);
  return (
    <div>
      <div class="row">
        <div className="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Sex</th>
                <th scope="col">FinalMark</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {desuupList &&
                desuupList.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.registeredOn}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setSelectedDesuup(item);
                            setDisplayDetail(true);
                          }}
                        >
                          View
                        </button>
                        <button className="btn btn-warning">Edit</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h2>Details</h2>

          {displayDetail && (
            <>
              <DesuupDetail desuup={selectedDesuup} />
              <button
                className="btn btn-sm btn-warning"
                onClick={() => setDisplayDetail(!displayDetail)}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
      <br />
    </div>
  );
};
