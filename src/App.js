import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BiCopyright} from 'react-icons/bi'
import TableList from './components/TableList'
import './App.css'

const App = () => {
  const [selectedOption, setSelectedOption] = useState('2 Pair')
  const [onClickSubmit, setOnClickSubmit] = useState(false)

  const handleOptionChange = option => {
    setSelectedOption(option)
  }

  const calculateTotal = () => {
    if (selectedOption === '1 Pair') {
      return 'DKK 195.00'
    }
    if (selectedOption === '2 Pair') {
      return 'DKK 345.00'
    }
    if (selectedOption === '3 Pair') {
      return 'DKK 528.00'
    }
    return ''
  }

  const submitForm = event => {
    event.preventDefault()

    setOnClickSubmit(preState => !preState)
  }

  return (
    <form className="app-container" onSubmit={submitForm}>
      <div className="inner-container">
        <div className="heading-container">
          <hr className="hr-line" />
          <h1 className="heading">Bundle & Save</h1>
          <hr className="hr-line" />
        </div>
        <div>
          <div
            className={`pair2-container ${
              selectedOption === '1 Pair' && 'selected-option'
            }`}
          >
            <div className="pair2-input-container">
              <div className="input-container">
                <input
                  type="radio"
                  className="input-element"
                  name="offer"
                  onChange={() => handleOptionChange('1 Pair')}
                />
                <div className="DKK">
                  <p>1 Pair</p>
                  <h5>DKK 195.00</h5>
                </div>
              </div>
              <h5>50% OFF</h5>
            </div>
            {calculateTotal() === 'DKK 195.00' && <TableList />}
          </div>
          <div
            className={`pair2-container ${
              selectedOption === '2 Pair' && 'selected-option'
            }`}
          >
            <div className="pair2-input-container">
              <div className="input-container">
                <input
                  type="radio"
                  className="input-element"
                  name="offer"
                  onChange={() => handleOptionChange('2 Pair')}
                  defaultChecked
                />
                <div className="DKK">
                  <p>2 Pair</p>
                  <h5>DKK 345.00</h5>
                </div>
              </div>
              <p className="line-overline">DKK 195.00</p>
              <div className="forty-percent">
                <p className="popular-text">Most Popular</p>
                <h5 className="align-forty">40% OFF</h5>
              </div>
            </div>
            {calculateTotal() === 'DKK 345.00' && <TableList />}
          </div>
          <div
            className={`pair2-container ${
              selectedOption === '3 Pair' && 'selected-option'
            }`}
          >
            <div className="pair2-input-container">
              <div className="input-container">
                <input
                  type="radio"
                  className="input-element"
                  name="offer"
                  onChange={() => handleOptionChange('3 Pair')}
                />
                <div className="DKK">
                  <p>3 Pair</p>
                  <h5>DKK 528.00</h5>
                </div>
              </div>
              <h5>60% OFF</h5>
            </div>
            {calculateTotal() === 'DKK 528.00' && <TableList />}
          </div>
        </div>
        <div className="total-container">
          <p className="free-shipping">Free 2 Days Shipping</p>
          <p>
            Total: <span>{calculateTotal()}</span>
          </p>
        </div>
        <div>
          <button type="submit" className="add-cart-button">
            + Add to Cart
          </button>
        </div>
        <div className="copyright-container">
          <BiCopyright />
          <p className="copyright-name">Powered by Pumper</p>
        </div>
      </div>
      {onClickSubmit && (
        <p className="success-order-msg">Order Placed Successfully</p>
      )}
    </form>
  )
}

export default App
