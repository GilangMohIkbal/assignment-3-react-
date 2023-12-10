import React from "react";
import { getInterest } from "../interest";
export default class Interest extends React.Component {
  state = {
    interest: [],
  };

  componentDidMount() {
    const interest = getInterest();
    this.setState({ interest });
  }
  render() {
    return (
      <div className="container text-center d-flex justify-content-center align-items-center flex-column mt-5">
        <h1 className="mb-3">My Interest</h1>
        <hr />
        <div className="d-flex flex-wrap" style={{ maxWidth: "1400px" }}>
          {this.state.interest.map((data) => (
            <div
              className="card d-flex flex-column justify-content-center align-items-center m-2"
              key={data.id}
            >
              <img
                src={data.logo}
                className="card-img-top mb-4"
                alt="..."
                style={{ maxWidth: "90px" }}
              />
              {/* <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
            </div> */}
              <div className="card-footer">
                <small className="text-body-secondary">{data.name}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
