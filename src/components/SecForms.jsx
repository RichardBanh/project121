import React, { Component } from "react";
import datap from "../datap/boop";
import Form from "./Form";
import { Link } from "react-router-dom";
import '../css/StyleSheet.css'

//decide what data is passed here 
export default class SecForms extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], id: "", };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    var data = datap[id];
    this.setState({
      data,
      id
    });
  }
  
  calculate = (obj) =>{
    
  }
  
  render() {
    if (!this.state.data) {
      return <div>Loading!</div>;
    } else {
      if (this.state.id) {
        let formpopulated = this.state.data.map(x => (
          <Form department={x.department} weight={parseInt(x.weight, 10)} id selcName = {this.props.selcName}/>
        ));
        return (
          <form>
            {formpopulated}
            <button className="btn">
              <Link to="/">back</Link>
            </button>
            <button className="btn">Calculate</button>
            <input className="btn" type="submit" />
          </form>
        );
      } else {
        return <div>has data but database broken </div>;
      }
    }
  }
}
