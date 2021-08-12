import React, {Component} from "react";

class EvenAndOdd extends Component{
    constructor(){
        super()
        this.state={
            evenArray: [],
            oddArray:[],
            userInput: ''
        }
    }
  

    render() {
    // console.log('STATE: ', this.state)

    const handleChange = (value) => {
        // console.log('value', value)
        this.setState({userInput: value})
    }
    
     
    const handleClick = (userInput) => {
        let numArr = userInput.split(',')
        console.log(numArr)
        let evens = [];
        let odds = [];

        for(let i=0; i< numArr.length; i++){
            if(numArr[i] % 2 ===0){
                evens.push(numArr[i])
            } else {
                odds.push(numArr[i])
            }
        }
        this.setState({evensArray: evens, oddArray: odds})
    }

    return(
        <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input 
            className="inputLine" 
            onChange={ (e)=> {
                handleChange(e.target.value)
            }}
        />
        <button className="confirmationButton" onClick={(e)=> {
            handleClick(this.state.userInput)}}>Split</button>
        <span className="resultsBox">Even Array: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odd Array:{JSON.stringify(this.state.oddArray)}</span>
        </div>
    )
}
}

export default EvenAndOdd;