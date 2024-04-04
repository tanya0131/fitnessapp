import React, { Component } from 'react';
import axios from 'axios';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme } from 'victory';

class DietGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      labelArray: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8089/calories/all')
      .then(response => {
        if (!Array.isArray(response.data)) {
          throw new Error('Data is not an array.');
        }

        // Assuming response.data is an array of objects with 'date' and 'totalCalories' properties
        const calorieData = response.data;
        const chartData = calorieData.map(data => data.totalCalories);
        const labelArray = calorieData.map(data => data.date);

        this.setState({ chartData, labelArray });
      })
      .catch(error => {
        console.error('Error fetching date-calories data:', error);
      });
  }

  render() {
    return (
      <div>
        {/* Section 2: Graph Below */}
        <section className="subsection-2 center-graph">
          <div className="flex-item-card-graph">
            <VictoryChart
              theme={VictoryTheme.material}
              style={{
                parent: {
                  background: "linear-gradient(to right, #8a2be2, #9400d3, #9932cc, #8a2be2)",
                  maxWidth: "100%",
                  width: "100%",
                  height: "450px",
                },
              }}
              domainPadding={{ x: 10, y: 10 }}
            >
              <VictoryArea
                data={this.state.chartData.map((value, index) => ({
                  x: this.state.labelArray[index],
                  y: value,
                }))}
                style={{
                  data: {
                    fill: "url(#black-to-white-gradient)",
                    opacity: 0.7,
                  },
                  parent: { maxWidth: "100%" },
                }}
              />
              <VictoryAxis
                label="Date"
                style={{
                  axisLabel: { padding: 30, fill: "black" },
                  tickLabels: { fill: "black", fontSize: 9 },
                }}
              />
              <VictoryAxis
                dependentAxis
                label="Total Calories"
                style={{
                  axisLabel: { padding: 70, fill: "black" },
                  tickLabels: { fill: "black", fontSize: 9 },
                }}
              />
              <defs>
                <linearGradient id="black-to-white-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "black", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </VictoryChart>
          </div>
        </section>
      </div>
    );
  }
}

export default DietGraph;
