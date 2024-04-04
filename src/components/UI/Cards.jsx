
import React, { useState, useEffect } from 'react';
import '../../styles/pricing.css';
import axios from 'axios';
import dash from "../../assests/img/dash.jpg";
import DietGraph from '../DietGraph';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

const Cards = () => {
  const [bmiData, setBmiData] = useState([]);
  const [labelArray, setLabelArray] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [avgCalorieIntake, setAvgCalorieIntake] = useState(null);
  const [avgBMI, setAvgBMI] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8089/bmi')
      .then(response => {
        const bmiData = response.data;
        const chartData = bmiData.map(data => data.bmiresult);
        const labelArray = bmiData.map(data => data.date);
        setBmiData(bmiData);
        setChartData(chartData);
        setLabelArray(labelArray);

        // Calculate average BMI
        const totalBMI = chartData.reduce((acc, bmi) => acc + bmi, 0);
        const avgBMI = totalBMI / chartData.length;
        setAvgBMI(avgBMI);
      })
      .catch(error => {
        console.error('Error fetching BMI data:', error);
      });

    axios.get('http://localhost:8089/calories/all')
      .then(response => {
        setTableData(response.data);

        // Calculate average calorie intake
        const totalCalories = response.data.reduce((acc, item) => acc + item.totalCalories, 0);
        const avgCalorieIntake = totalCalories / response.data.length;
        setAvgCalorieIntake(avgCalorieIntake);
      })
      .catch(error => {
        console.error('Error fetching date-calories data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8089/bmi')
      .then(response => {
        const bmiData = response.data;
        const chartData = bmiData.map(data => data.bmiresult);
        const labelArray = bmiData.map(data => data.date);
        setBmiData(bmiData);
        setChartData(chartData);
        setLabelArray(labelArray);
      })
      .catch(error => {
        console.error('Error fetching BMI data:', error);
      });

    axios.get('http://localhost:8089/calories/all')
      .then(response => {
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error fetching date-calories data:', error);
      });
  }, []);

  const togglePopup2 = () => {
    setIsPopupOpen2(!isPopupOpen2);
  };

  // Function to get today's date in the format "Month Day, Year"
  const getTodayDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className="dashboard-header">
      <div className="inline-cards3">
        <div className="pricing__item pricing__item-d">
         <h3>**Dashboard</h3>
        </div>
        <h5 className="h5-date"><span className='h5-span'>Today's Date  </span>{getTodayDate()}</h5>
        </div>
      </div>
      <div className="container">
      <div className="pricing__wrapper" style={{ backgroundImage: `url(${dash})`, backgroundSize: 'cover' }}>
          <div className="test-text"><b>Meal Stats</b></div>
          <div className="pricing__item pricing__item-001">
            <div className="pricing__card-top">
              <h2 className="section__title">
              Average BMI: {avgBMI !== null ? avgBMI.toFixed(2) : 'N/A'}{' '}
 <i className="fa fa-user fa-fw"></i>
              </h2>
            </div>
            <div className="services">
            <p>The accepted healthy and average BMI is within the range of 18.5 to 24.9 </p>
            </div>
          </div>

          <div className="pricing__item pricing__item-002">
            <div className="pricing__card-top">
              <h2 className="section__title">
                Weather <i className="fa fa-star fa-fw"></i>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li><span>This is your progress till now according to the dates</span></li>
              </ul>
            </div>
          </div>

          <div className="test-text"><b>Weight</b></div>
          <div className="pricing__item pricing__item-003">
            <div className="pricing__card-top">
              <h2 className="section__title">
              Average Calorie Intake: {avgCalorieIntake !== null ? avgCalorieIntake.toFixed(2) + ' calories/day' : 'N/A'}{' '}
              </h2>
            </div>
            <div className="services">
            <p>The recommended daily calorie intake is 2,000 calories a day</p>
            
            </div>
          </div>
        </div>
      </div>
      <div className="inline-cards2" style={{ backgroundImage: `url(${dash})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
        <div className="pricing__item pricing__item-06"></div>
        <div className="pricing__item pricing__item-05"></div>

        <div className="pricing__item pricing__item-popup" onClick={togglePopup2}>
          <div className="pricing__card-top">
            <h3 className="section__title">
              Pop Bmi Graph <i className="fa fa-plus fa-fw"></i>
            </h3>
          </div>
        </div>

        {isPopupOpen2 && (
          <div className="pricing__item pricing__item-popup">
            <div className="pricing__card-top">
              <h3 className="section__title">
                Bmi Graph <i className="fa fa-info-circle fa-fw"></i>
              </h3>
              <VictoryChart
                theme={VictoryTheme.material}
                style={{
                  parent: {
                    backgroundColor: "black",
                    maxWidth: "100%",
                    width: "95%",
                    height: "300px",
                  },
                }}
                domainPadding={{ x: 10, y: 10 }}
              >
                <VictoryLine
                  data={chartData.map((value, index) => ({ x: labelArray[index], y: value }))}
                  style={{
                    data: { stroke: "purple" },
                    parent: { maxWidth: "100%" },
                  }}
                />
                <VictoryAxis
                  label="Date"
                  style={{
                    axisLabel: { padding: 30 },
                    tickLabels: { fill: "white", fontSize: 9 },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  label="BMI"
                  style={{
                    axisLabel: { padding: 70 },
                    tickLabels: { fill: "white", fontSize: 9 },
                  }}
                />
              </VictoryChart>
            </div>
            <div className="services"></div>
            <button onClick={togglePopup2} className="close-popup">
              <i className="fa fa-times-circle fa-fw"></i> Close
            </button>
          </div>
        )}
      </div>
      <div className="inline-cards1">
        <div className="pricing__item pricing__item-04">
          <h3>Calorie Intake Graph</h3>
          <DietGraph />
        </div>
        <div className="pricing__item pricing__item-05">
          <table className="table table-bordered table-shadow">
            <thead>
              <tr>
                <th>Date</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(item => (
                <tr key={item.date}>
                  <td className="bold center-align">{item.date}</td>
                  <td className="bold center-align">{item.totalCalories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="inline-cards1">
        <div className="pricing__item pricing__item-s">
          <div className="card-content">
            <div className="card-title">Sleep</div>
            <div className="right-corner-text">3/8 hours</div>
          </div>
          <div className="fill">
            <div className="thick-line">
              <div className="filled-part"></div>
              <div className="empty-part"></div>
            </div>
          </div>
        </div>
        <div className="pricing__item pricing__item-s">
          <div className="card-content">
            <div className="card-title">Water Intake</div>
            <div className="right-corner-text">1/7 ltr</div>
          </div>
          <div className="fill">
            <div className="thick-line">
              <div className="filled-part-2"></div>
              <div className="empty-part-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
