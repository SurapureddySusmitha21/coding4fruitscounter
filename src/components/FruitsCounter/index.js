// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  clickMango = () => {
    this.setState(prevsState => {
      console.log(`previous state value ${prevsState.mangoes}`)
      return {mangoes: prevsState.mangoes + 1}
    })
  }

  clickbanana = () => {
    this.setState(prevsState => {
      console.log(`previous state value ${prevsState.bananas}`)
      return {bananas: prevsState.bananas + 1}
    })
  }

  render() {
    const {mangoes} = this.state
    const {bananas} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="value">{mangoes}</span> Mangoes{' '}
            <span className="value">{bananas} </span>Bananas
          </h1>
          <div className="image-container">
            <div className="mango-container">
              <img
                className="img-size"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="btn-eat"
                onClick={this.clickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                className="img-size"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="btn-eat"
                onClick={this.clickbanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
