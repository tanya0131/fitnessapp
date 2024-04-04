

import React, { Component } from 'react';
import axios from 'axios';
class FoodTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  handleSearchInputChange = (event) => {
    const enteredQueryValue = event.target.value;
    this.setState({ searchQuery: enteredQueryValue });
  };

  handleAddButton = async (food) => {
    try {
      console.log('Food object:', food);
      const response = await axios.post('http://localhost:8089/plan', {
        ...food,
        date: this.props.date.toISOString().split('T')[0], 
      });
  
      if (response.status === 200) {
        console.log('Food added to userplan successfully');
      }
    } catch (error) {
      console.error('Error adding food to userplan:', error);
    }
  };
  

  render() {
    const { searchQuery } = this.state;
    const { data } = this.props;

    const columnNamesArray = ['Food', 'Measure', 'Grams', 'Calories', 'Carbs', 'category'];

    // Filter the data based on the search query
    const filteredData = searchQuery
      ? data.filter((food) => food.Food.toLowerCase().includes(searchQuery.toLowerCase()))
      : data;

      

    // Create table rows for the filtered data
    const rows = filteredData.map((food, index) => (
      <tr key={index}>
        <td>{food.food}</td>
        <td>{food.measure}</td>
        <td>{food.grams}</td>
        <td>{food.calories}</td>
        <td>{food.carbs}</td>
        <td>{food.category}</td>
        <td>
          <div>
          <button className="login__btn" type="submit" onClick={() => this.handleAddButton(food)}>
  Add
</button>

          </div>
        </td>
      </tr>
    ));

    return (
      <div>
        <div>
          {/* Table */}
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                {columnNamesArray.map((columnName, index) => (
                  <th key={index}>{columnName}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Display table rows */}
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FoodTable;
