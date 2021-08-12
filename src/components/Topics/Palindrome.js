import React, {Component} from "react";

class Palindrome extends Component{

    constructor(){
        super();

        this.state ={
            userInput: '',
            palindrome: ''
        }
    }
    render() {
    
    const handleChange = (value)=> {
        this.setState({userInput: value})
        console.log('value:', value)
    }

    const checkPalindrome = (props) => {
        let forward = props
        let reverse= props.split('')
        let flip =reverse.reverse()
        let joined = flip.join('')
        
        console.log(forward, joined)
        if(joined === forward){
            this.setState({palindrome: true})
        } else {
            this.setState({palindrome: false})
        }
    }

    return(
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={(e)=> {
                handleChange(e.target.value)
            }}/>
            <button className="confirmationButton" onClick={() => {
                checkPalindrome(this.state.userInput)
            }}>Check Palindrome</button>
            <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
        </div>
    )
}
}

export default Palindrome;