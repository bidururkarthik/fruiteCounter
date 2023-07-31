// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {fruits: 0}

  clickMango = () => {
    this.setState(each => ({fruits: each.fruits + 1}))
  }

  clickbananas = () => {
    this.setState(each => ({fruits: each.fruits + 1}))
  }

  render() {
    const {fruits} = this.state
    return (
      <div className="container">
        <div className="fruitecontainer">
          <h1>
            Bob ate {fruits} mangoes {fruits} bananas
          </h1>
          <div className="imagecontainer">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="image_Size"
              />
              <br />
              <button
                className="button"
                type="button"
                onClick={this.clickMango}
              >
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="image_Size"
              />
              <br />
              <button
                className="button"
                type="button"
                onClick={this.clickbananas}
              >
                Eat Bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
