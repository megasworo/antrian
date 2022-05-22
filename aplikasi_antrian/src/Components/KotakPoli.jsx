import React from "react";

export default function KotakPoli({ onClick, title, antrian }) {
  return (
    <div className="col-4" onClick={onClick}>
      <h1 className="text-center">{title}</h1>
      <div className="containerAntrian">
        <h1 className="nomorAntrian">{antrian}</h1>
      </div>
    </div>
  );
}
