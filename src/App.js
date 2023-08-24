import 'bootstrap/dist/css/bootstrap.min.css'
import {BiCopyright} from 'react-icons/bi'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="inner-container">
      <div className="heading-container">
        <hr className="hr-line" />
        <h1 className="heading">Bundle & Save</h1>
        <hr className="hr-line" />
      </div>
      <div>
        <div className="pair1-container">
          <div className="input-container">
            <input type="radio" className="input-element" />
            <div className="DKK">
              <p>1 Pair</p>
              <h5>DKK 195.00</h5>
            </div>
          </div>
          <h5>50% OFF</h5>
        </div>
        <div className="pair2-container">
          <div className="pair2-input-container">
            <div className="input-container">
              <input type="radio" className="input-element" />
              <div className="DKK">
                <p>2 Pair</p>
                <h5>DKK 345.00</h5>
              </div>
            </div>
            <p className="line-overline">DKK 195.00</p>
            <div>
              <p className="popular-text">Most Popular</p>
              <h5>40% OFF</h5>
            </div>
          </div>
        </div>
        <div className="pair1-container">
          <div className="input-container">
            <input type="radio" className="input-element" />
            <div className="DKK">
              <p>3 Pair</p>
              <h5>DKK 528.00</h5>
            </div>
          </div>
          <h5>60% OFF</h5>
        </div>
      </div>
      <div className="total-container">
        <p className="free-shipping">Free 2 Days Shipping</p>
        <p>
          Total: <span>DKK 360.00</span>
        </p>
      </div>
      <div>
        <button type="button" className="add-cart-button">
          + Add to Cart
        </button>
      </div>
      <div className="copyright-container">
        <BiCopyright />
        <p className="copyright-name">Powered by Pumper</p>
      </div>
    </div>
  </div>
)

export default App
