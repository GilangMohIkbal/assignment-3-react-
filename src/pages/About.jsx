import React from "react";
import gambar from "../assets/foto.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container home text-center d-flex justify-content-center align-items-center flex-column">
        <h1 className="fw-bold text-primary">ABOUT ME</h1>
        <div className="d-flex deskop">
          <div className="kiri">
            <img
              src={gambar}
              style={{
                height: "16em",
                padding: "1.5em",
                willChange: "filter",
                transition: "filter 300ms",
                borderRadius: "50%",
              }}
            />
            <p className="fw-bolder"> Gilang M Iqbal | Front-End Dev</p>
          </div>
          <div className="kanan">
            <p>
              Selamat datang di portofolio saya! Saya adalah seorang pengembang
              Front-end yang bersemangat dan berpengalaman dalam menciptakan
              pengalaman web yang menarik dan fungsional. Di sini, Anda akan
              menemukan proyek-proyek terbaru saya, keterampilan yang saya
              kuasai, dan pengalaman yang telah saya dapatkan dalam dunia
              pengembangan web.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
