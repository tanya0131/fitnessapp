import React, { Component } from 'react';
import axios from 'axios';
import "../styles/nutrition.css";
import FoodTable from './FoodTable';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import '../styles/nutrition.css';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';

class NutritionDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryValue: "",
      displayedData: [],
      date: new Date()
    };
  }

  componentDidMount() {
    this.fetchFoodDataFromBackend();
  }

  fetchFoodDataFromBackend = async () => {
    try {
      const response = await axios.get(`http://localhost:8089/find?food=${this.state.queryValue}`);
      const dataFromBackend = response.data;
      this.setState({ displayedData: dataFromBackend });
    } catch (error) {
      console.error('Error fetching food data from backend:', error);
      this.setState({ displayedData: [] });
    }
  };

  getSearchInputValue = (event) => {
    const enteredQueryValue = event.target.value;
    this.setState({ queryValue: enteredQueryValue }, () => {
      // Call the fetchFoodDataFromBackend function with the updated query value
      this.fetchFoodDataFromBackend();
    });
  };

  render() {
    const { queryValue, displayedData, date } = this.state;

    return (
      <div>
        <Header></Header>
        <div style={{ borderBottom: "8px solid black", marginTop: "20px" }}></div>
        <section id="make-my-diet-plan" className="subsection-2">
          <h1>Make My Diet Plan</h1>
          <div className="center">
            <div className="flex-container-make">
              {/* Set date and filter */}
              <div className="flex-item-card-make-2">
                <form className="form-inline my-2 my-lg-0">
                  <ul className="make-my-diet-plan-ul">
                    <li className="make-my-diet-plan-li">
                      <label htmlFor="make-plan-date">Select Date: &nbsp; </label>
                      <DatePicker className='datepicker' selected={date} onChange={(date) => this.setState({ date })} />
                    </li>
                    <li className="make-my-diet-plan-li">
                      <label htmlFor="food-item-search">Search For a Food Item:</label>
                      <input className="form-control mr-sm-2"
                        onChange={this.getSearchInputValue}
                        value={queryValue}
                        type="search"
                        aria-label="Search" />
                    </li>
                  </ul>
                </form>
              </div>

              {/* Displaying results */}
              <div className="flex-item-card-make">
                <h1>Results</h1>
                <div className='foodtable'>
                  <FoodTable data={displayedData} date={date} />
                </div>
              </div>

              {/* Add Food to Database */}
              <div className="flex-item-card-make">
                <div className='addFood'>
                  <p className="center">Didn't Find The Food Item You Want?</p>
                  <Link to="/add-food">
                    <button id="submitButton" type="submit" className="login__btn">Add Food to Database</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NutritionDetailsPage;