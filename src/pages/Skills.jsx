import React from "react";
import { getSkill } from "../skills";

export default class Skills extends React.Component {
  state = {
    skills: [],
  };

  componentDidMount() {
    const skills = getSkill();
    this.setState({ skills });
  }
  render() {
    return (
      <div className="container home text-center d-flex justify-content-center flex-column ">
        <h1 className="mb-3">My Skills</h1>
        <hr />
        <div className="d-flex flex-wrap" style={{ maxWidth: "1400px" }}>
          {this.state.skills.map((data) => (
            <div
              className="card d-flex flex-column justify-content-center align-items-center m-2"
              key={data.id}
            >
              <img
                src={data.logo}
                className="card-img-top"
                alt="..."
                style={{ maxWidth: "90px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Version {data.version}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
