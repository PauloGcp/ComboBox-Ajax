import React, { Component } from "react";
import axios from "axios";

const URL = "http://localhost:3001/dias"

export default class Combo extends Component {
    state = {dias:[]}

    componentDidMount(){
        axios.get(URL)
            .then(res=>{
                this.setState({dias: res.data})
                console.log(res);
            })
    }
    /* componentDidMount(){
        fetch(URL , {method: 'GET'})
            .then(res=>{
                console.log(res.json());
                //this.setState({dias: res.data})
            })
    } */
    

    renderOptions(){
        return this.state.dias.map(dia=>{
            return <option value={dia.id}>{dia.nome}</option>
        })
    }

    render(){
        return(
            <div>
                <label htmlFor="dias">Dias:</label>
                <select id="dias">
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}

