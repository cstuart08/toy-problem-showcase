 import React, {Component} from 'react'

 class EvenAndOdd extends Component {
constructor() {
    super()
    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ""
    }
}

handleChange(val) {
    console.log(val)
    this.setState({
        userInput: val
    })
}

separateValues() {
    let arr = this.state.userInput.split(',')
    let evens = []
    let odds = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i])
        } else {
            odds.push(arr[i])
        }
    }

    this.setState({
        evenArray: evens,
        oddArray: odds
    })
}

     render() {
         return (
             <div className="puzzleBox evenAndOddPB">
                 <h4>Evens and Odds</h4>
                 <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} placeholder="Hi" />
                 <button className="confirmationButton" onClick={this.separateValues()}>Confirm</button>
                <span className="resultsBox">{`Evens: ${this.state.evenArray}`}</span>
                 <span className="resultsBox"></span>
             </div>

         )
     }
 }

 export default EvenAndOdd