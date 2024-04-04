import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

import Header from './Header';
import Layout from './UI/Layout';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightkgEntered: null,
      heightcmEntered: null,
      date: new Date(),
      bmiresult: "",
      chartData: [],
      labelArray: [],
      bmiData: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8089/bmi')
      .then(response => {
        const bmiData = response.data;
        const chartData = bmiData.map(data => data.bmiresult);
        const labelArray = bmiData.map(data => data.date);
  
        this.setState({ bmiData, chartData, labelArray });
      })
      .catch(error => {
        console.error('Error fetching BMI data:', error);
      });
  }
  
  // Function to calculate BMI
  calculateBMI = (weightkg, heightcm) => {
    const calculatedbmiresult = ((weightkg / heightcm / heightcm) * 10000).toFixed(1);
    this.setState({ bmiresult: calculatedbmiresult });
  };

  // Event handler for Calculate BMI button click
  handleCalculateClick = (event) => {
    this.calculateBMI(this.state.weightkgEntered, this.state.heightcmEntered);
    event.preventDefault();
  };

  handleWeightInputChange = (event) => {
    const enteredWeightValue = event.target.value;
    this.setState({ weightkgEntered: enteredWeightValue });
  }

  handleHeightInputChange = (event) => {
    const enteredHeightValue = event.target.value;
    this.setState({ heightcmEntered: enteredHeightValue });
  }

  // Event handler for Save Data button click
  handleSubmitSaveData = async (event) => {
    event.preventDefault();
  
    try {
      const formattedDate = this.state.date.toISOString().slice(0, 10);
      const response = await axios.post('http://localhost:8089/postbmi', {
        bmiresult: this.state.bmiresult,
        date: formattedDate, // Send the formatted date
       
      });
      
  
      if (response.status === 200) {
        console.log('BMI data saved successfully');
        window.location.href = "/graph";
      }
    } catch (error) {
      console.error('Error saving BMI data:', error);
    }
  };
  
  async handleRemoveClick(index, date) {
    try {
      // Send a DELETE request to your API endpoint with the date as a query parameter
      const response = await axios.delete(`http://localhost:8089/delbmi?date=${date}`);
      
      // Check if the request was successful (status code 200)
      if (response.status === 200) {
        console.log('BMI data deleted successfully');
        
        // Update the state to remove the deleted detail
        const updatedDetails = this.state.details.filter((_, i) => i !== index);
        this.setState({ details: updatedDetails, error: null });
        
       
        window.location.reload();
      } else {
        // Handle other response statuses as needed
        console.log('Failed to delete BMI data');
        this.setState({ error: "Failed to delete BMI data" });
      }
    } catch (error) {
      console.error("An error occurred while deleting the entry:", error);
      this.setState({ error: "An error occurred while deleting the entry." });
    }
  }
  

  render() {
    return (
      <Layout>
        <Header />
        <hr className="black-line" /> 

        {/* Section 1: BMI Calculation Form and Table Side by Side */}
        <section className="subsection-1">
          <div className="flex-container-BMI">
            <div className="flex-item-card-BMI">
            <form className="center">
                <div className="form-group">
                  <label htmlFor="weight_kg" className="margin-BMI-form">Weight (kg): </label>
                  <input type="number" id="weight_kg" placeholder="weight in kg"
                    className="form-control" onChange={this.handleWeightInputChange} />

                  <label htmlFor="height_cm" className="margin-BMI-form">Height (cm): </label>
                  <input type="number" id="height_cm" placeholder="height in cm"
                    className="form-control" onChange={this.handleHeightInputChange} />

                  <div className="center">
                    <button id="submitButton" type="submit" className="login__btn"
                      onClick={this.handleCalculateClick}>Calculate BMI</button>
                  </div>

                  <div className="margin-BMI-form margin-BMI-form-2">
                    <label htmlFor="your_bmi" className="margin-BMI-form">Your BMI: </label>
                    <input readOnly type="text" id="your_bmi"
                      value={this.state.bmiresult}
                      placeholder="Your BMI"
                      className="form-control" />

                    <DatePicker
                      className="margin-BMI-form"
                      selected={this.state.date}
                      onChange={(date) => this.setState({ date })}
                    />

                    <div className="center">
                      <button id="submitButton" type="submit" className="login__btn"
                        onClick={this.handleSubmitSaveData}>Save Data</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex-item-card-BMI">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>BMI data</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.bmiData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.date}</td>
                      <td>{data.bmiresult}</td>
                      <td>
                      <button
  className="login__btn"
  type="submit"
  onClick={() => this.handleRemoveClick(index, data.date)}
>
  Remove
</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Graph Below */}
        <section className="subsection-2 center-graph">
          <div className="flex-item-card-BMI ">
          <VictoryChart
  theme={VictoryTheme.material}
  style={{
    parent: {
      backgroundColor: "black", // Set the background color here
      maxWidth: "100%",
      maxWidth: "100%",
      width: "95%", 
      height: "750px", 
    },
  }}
  domainPadding={{ x: 10, y: 10 }} // Add some padding if needed
>
  <VictoryLine
    data={this.state.chartData.map((value, index) => ({ x: this.state.labelArray[index], y: value }))}
    style={{
      data: { stroke: "purple" },
      parent: { maxWidth: "100%" },
    }}
  />
  <VictoryAxis
    label="Date"
    style={{
      axisLabel: { padding: 30 },
      tickLabels: { fill: "white",fontSize: 9 },
      
    }}
  />
  <VictoryAxis
    dependentAxis
    label="BMI"
    style={{
      axisLabel: { padding: 70 },
      tickLabels: { fill: "white",fontSize: 9},
    }}
  />
</VictoryChart>

          </div>
        </section>
      </Layout>
    );
  }
}

export default Graph;
