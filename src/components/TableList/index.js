import './index.css'

const TableList = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th> </th>
          <th>Size</th>
          <th>Colour</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#1</td>
          <td>
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </td>
          <td>
            <select>
              <option>Colour</option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Pink</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>#2</td>
          <td>
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </td>
          <td>
            <select>
              <option>Colour</option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Pink</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default TableList
