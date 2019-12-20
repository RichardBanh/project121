import React, { Component } from "react";
import Form from "./Form";

export default class Forms extends Component {
  fakedata = [
    {
      weight: "20%",
      department: "model"
    },
    {
      weight: "20%",
      department: "surf"
    },
    {
      weight: "20%",
      department: "poop"
    },
    {
      weight: "20%",
      department: "doop"
    },
    {
      weight: "20%",
      department: "durp"
    }
  ];
  
  
  render() {
    const formpopulated = this.fakedata.map(x => (
      <Form department={x.department} weight={parseInt(x.weight, 10)} />
    ));
    return <form>{formpopulated}</form>;
  }
}