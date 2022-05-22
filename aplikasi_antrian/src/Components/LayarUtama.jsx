import React, { Component } from "react";

import { gambar, nomorAwalFarmasi, nomorAwalKlinik } from "../Config/DataStore";
import "../Styles/LayarUtama.css";
import KotakPoli from "./KotakPoli";

export default class LayarUtama extends Component {
  state = {
    gambar: gambar,
    setAntrianKlinik: nomorAwalKlinik,
    setAntrianFarmasi: nomorAwalFarmasi,
    antrianPoli1: 0,
    antrianPoli2: 0,
  };

  render() {
    let {
      gambar,
      setAntrianKlinik,
      setAntrianFarmasi,
      antrianPoli1,
      antrianPoli2,
    } = this.state;
    return (
      <div>
        <img src={gambar[0].address} alt="vipmed" className="logo" />
        <div className="container mb-3">
          <div className="row">
            <KotakPoli
              antrian={antrianPoli1}
              onClick={() => {
                this.setState({
                  setAntrianKlinik: setAntrianKlinik + 1,
                  antrianPoli1: setAntrianKlinik++,
                });
              }}
              title="Poli 2"
            />
            <KotakPoli
              antrian={antrianPoli2}
              onClick={() => {
                this.setState({
                  setAntrianKlinik: setAntrianKlinik + 1,
                  antrianPoli2: setAntrianKlinik++,
                });
              }}
              title="Poli 3"
            />
            <KotakPoli
              antrian={setAntrianFarmasi}
              onClick={() => {
                this.setState({
                  setAntrianFarmasi: setAntrianFarmasi + 1,
                });
              }}
              title="Farmasi"
            />
          </div>
        </div>
        <div
          id="carouselVipmed"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {gambar.map((gambar, index) => {
              let kelasAktif = "carousel-item";
              kelasAktif += index === 0 ? " active" : "";
              return (
                <div className={kelasAktif}>
                  <img
                    src={gambar.address}
                    className="d-block w-100 imageCarousel"
                    alt="vipmed"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
