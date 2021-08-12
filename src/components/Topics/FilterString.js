import React, {Component} from "react";

class FilterString extends Component {

    constructor(){
        super();

        this.state = {
            unfilteredColors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
            userInput: "",
            filteredColors: []
        }
    }


    render() {
    const handleChange =(value)=> {
        this.setState({userInput: value})
        console.log('VALUE:', value)
    }

    const filterColors = (props) => {
        let colorStart = this.state.unfilteredColors
        let colorFinish = []

        for(let i = 0; i<colorStart.length; i++){
           if(colorStart[i].includes(props)){
               colorFinish.push(colorStart[i])
           }
        }
        this.setState({filteredColors: colorFinish})
    }
    return(
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{JSON.stringify(this.state.unfilteredColors)} </span>
            <input 
                className="inputLine" 
                onChange={(e)=>
                    handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={() => {
                filterColors(this.state.userInput)
            }}>Filter Array</button>
            <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredColors)}</span>
        </div>
    )
}
}

export default FilterString;