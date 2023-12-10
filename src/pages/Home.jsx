import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div
        className="container home text-center d-flex justify-content-center align-items-center "
        style={{ maxWidth: "1000px" }}
      >
        {/* Left Column  */}
        <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
          <h4 className="text-success">Student at Hactiv8</h4>
          <h1 className="text-primary fw-bold">
            REACT JS{" "}
            <span className="text-muted" style={{ fontSize: "24px" }}>
              &
            </span>{" "}
          </h1>
          <h1 className="text-primary fw-bold">REACT NATIVE BASIC</h1>

          <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
            <button className="btn text-white btn-success">About Me</button>
          </div>
        </div>
        {/* <!-- Right Column --> */}
        <div className="right-column text-center d-flex justify-content-lg-end justify-content-center pe-0">
          <img
            id="img-fluid"
            className="h-auto mw-100"
            src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header4/Header-4-2.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
