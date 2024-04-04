import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/nutrition.css";
import Header from './Header';

class DateDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      details: null,
      error: null
    };
  }

  async fetchData(selectedDate) {
    try {
      const formattedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

      const response = await axios.get('http://localhost:8089/date', {
        params: {
          date: formattedDate
        }
      });

      this.setState({ details: response.data, error: null });
    } catch (error) {
      this.setState({ details: null, error: "Data for the particular date is not present" });
    }
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date }, () => {
      this.fetchData(this.state.selectedDate);
    });
  };

   async handleRemoveClick(id, index) {
    try {
      // Send a DELETE request to your API endpoint with the ID as a parameter
      await axios.delete(`http://localhost:8089/plan/${id}`); // Replace with your actual API endpoint
      
      // Update the state to remove the deleted detail
      const updatedDetails = this.state.details.filter((_, i) => i !== index);
      this.setState({ details: updatedDetails, error: null });
    } catch (error) {
      this.setState({ error: "An error occurred while deleting the entry." });
    }
  }

  render() {
    const { details, error } = this.state;

    return (
      <div>
        <Header></Header>
        <div style={{ borderBottom: "8px solid black", marginTop: "20px" }}></div>
        <section id="make-my-diet-plan" className="subsection-2">
          <h1>This is our plan now follow it!!!!</h1>
          <div className="center">
            <div className="flex-container-make">
              <div className="flex-item-card-make">
                <form className="form-inline my-2 my-lg-0">
                  <ul className="make-my-diet-plan-ul">
                    <li className="make-my-diet-plan-li">
                      <label htmlFor="make-plan-date">Date: &nbsp; </label>
                      <DatePicker className='datepicker' selected={this.state.selectedDate} onChange={this.handleDateChange} />
                    </li>
                  </ul>
                </form>
              </div>
              <div>
    
                  <div>
                    <div className="flex-item-card-make">
                      <h1>Your Plan</h1>
                      <div>
                        <table className="table table-hover table-bordered">
                          <thead>
                            <tr>
                              <th>Food</th>
                              <th>Measure</th>
                              <th>Calories</th>
                              <th>Grams</th>
                              <th>Carbs</th>
                              <th>Category</th>

                            </tr>
                          </thead>
                          {error && <p>{error}</p>}
                        {details && (
                          <tbody>
                            {details.map((detail, index) => (
                              <tr key={index}>
                                <td>{detail.food}</td>
                                <td>{detail.measure}</td>
                                <td>{detail.grams}</td>
                                <td>{detail.calories}</td>
                                <td>{detail.carbs}</td>
                                <td>{detail.category}</td>
                                 <td>
          <div>
          <button className="login__btn" type="submit" onClick={() => this.handleRemoveClick(detail.id, index)}>
  Remove
</button>

          </div>
        </td>
                              </tr>
                            ))}
                          </tbody>
                          )}
                        </table>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DateDetails;
