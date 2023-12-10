import React from "react";
import { useParams } from "react-router-dom";
import { getData } from "../exp";

class ExperienceDetail extends React.Component {
  state = {
    data: "",
  };
  componentDidMount() {
    let params = this.props.params;
    let items = getData();
    let selectedItems = items.find(
      (item) => item.id === Number(params.experienceId)
    );
    this.setState({ data: selectedItems });
  }
  render() {
    return (
      <div
        className="text-left"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <h4>{this.state.data.name}</h4>
        <hr />
        <h6 className="">Detail</h6>
        <div className="alert alert-success" role="alert">
          {this.state.data.detail}
        </div>
        <h6>Fitur</h6>
        <div className="alert alert-primary" role="alert">
          {this.state.data.fitur}
        </div>
        <h6>Peran dalam Pembuatan</h6>
        <div className="alert alert-info" role="alert">
          {this.state.data.peran}
        </div>
        <h6>Tools yang digunakan</h6>
        <div className="alert alert-dark" role="alert">
          {this.state.data.tools}
        </div>
        <h6>Status pengerjaan</h6>
        <div className="alert alert-warning" role="alert">
          {this.state.data.status}
        </div>
        <h6>Kunjungi Web</h6>
        <div className="alert alert-light" role="alert">
          {this.state.data.tautan !== "" ? (
            <a href={this.state.data.tautan} className="btn btn-primary">
              Lihat Web
            </a>
          ) : (
            <button className="btn btn-secondary" disabled>
              belum tersedia
            </button>
          )}
          {/* <a href={this.state.data.tautan} className="btn btn-primary">
            Lihat Web
          </a> */}
        </div>
      </div>
    );
  }
}
export default (props) => <ExperienceDetail {...props} params={useParams()} />;
