import React, {Component} from "react";

class Sum extends Component{
    constructor(){
        super();

        this.state ={
            num1: 0,
            num2: 0,
            sum: null
        }
    }
    render() {

    const handleInputOne = (value) => {
        this.setState({num1: parseInt(value, 10)})
    }

    const handleInputTwo = (value) => {
        this.setState({num2: parseInt(value, 10)})
    }

    const sumNumbers =(num1, num2) =>{
        this.setState({sum: num1 + num2})
    }
    return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" type="number" onChange={(e)=> {
                handleInputOne(e.target.value)}}/>
            <input className="inputLine" type="number" onChange={(e)=> {
                handleInputTwo(e.target.value)}}/>  
            <button className="confirmationButton" onClick={()=> {
                sumNumbers(this.state.num1, this.state.num2)
            }}>Add Numbers</button>
            <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
    )
}
}
export default Sum;