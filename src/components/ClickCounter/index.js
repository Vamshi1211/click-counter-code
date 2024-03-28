// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="bg-color">
          <h1 className="heading">
            The button has been clicked{' '}
            <span className="span-element">{count}</span> times
          </h1>
          <p className="button-des">Click the button to increase the count!</p>
          <button type="button" className="button-style" onClick={this.clickMe}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
