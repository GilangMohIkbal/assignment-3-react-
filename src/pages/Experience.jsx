import React from "react";
import { getData } from "../exp";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import withRouter from "./WithRouter";

export default class Experience extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const data = getData();
    this.setState({ data });
  }
  submitData(item) {
    const { navigate } = this.props;
    navigate(`${item.id}`);
  }
  render() {
    return (
      <div className="container-fluid home text-center d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-5">My Experience</h4>
                <div className="hori-timeline" dir="ltr">
                  <ul className="list-inline events">
                    {this.state.data.map((item) => (
                      <li className="list-inline-item event-list" key={item.id}>
                        <div className="px-4">
                          <div className={item.color}>{item.category}</div>
                          <h5 className="font-size-16">{item.name}</h5>
                          <p className="text-muted">{item.about}</p>
                          <div>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => this.submitData(item)}
                            >
                              Lihat Detail
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
