import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Layout from './UI/Layout';

class AddFoodToDatabase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: "",
            measure: "",
            grams:"",
            calories: "",
            carbs: "",
            category: ""
        };
    }

    foodSubmit = async (event) => {
        event.preventDefault();

        const newCustomizedFoodItemData = {
            food: this.state.food,
            measure: this.state.measure,
            grams: this.state.grams,
            calories: this.state.calories,
            carbs: this.state.carbs,
            category: this.state.category
        };

        try {
            const response = await axios.post('http://localhost:8089/addFood', newCustomizedFoodItemData);
            console.log('Food added successfully:', response.data);
            window.location.href = "/add-food";
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

    render() {
        return (
            <Layout>
            <div className='header'>
                <Header></Header>
                <hr className="black-line" /> 
            </div>
            
        <div className="flex-container-BMI">
    
            <div className="flex-item-card-BMI">
    
                <h2>How to add customized food items to our database?</h2>
                <h5 className="margin-BMI-form">Example Food Item Data Entry:</h5>
                <label htmlFor="Food" className="margin-BMI-form">Food: </label>
                <input readOnly type="text" id="Food" placeholder="Curd-Rice"
                    className="form-control" />
    
                <label htmlFor="Measure" className="margin-BMI-form">Measure: </label>
                <input readOnly type="text" id="Measure" placeholder="1 bowl"
                    className="form-control" />
    
                <label htmlFor="Grams" className="margin-BMI-form">Grams: </label>
                <input readOnly type="number" id="Grams" placeholder="864"
                    className="form-control" />
    
                <label htmlFor="Calories" className="margin-BMI-form">Calories: </label>
                <input readOnly type="number" id="Calories" placeholder="350"
                    className="form-control" />
    
                <label htmlFor="Carbs" className="margin-BMI-form">Carbs: </label>
                <input readOnly type="number" id="Carbs" placeholder="68"
                    className="form-control" />
    
                <label htmlFor="Category" className="margin-BMI-form">Food Category: </label>
                <input readOnly type="number" id="Category" placeholder="Other"
                    className="form-control" />
            </div>
    
            
            <div className="flex-item-card-BMI">
                <form className="center" onSubmit={this.foodSubmit}>
    
                <div className="form-group">
        <label htmlFor="Food" className="margin-BMI-form">Food: </label>
        <input
            type="text"
            id="Food"
            placeholder="Food Name"
            className="form-control"
            value={this.state.food}
            onChange={(event) =>
                this.setState({ food: event.target.value })
              }
        />
    
        <label htmlFor="Measure" className="margin-BMI-form">Measure: </label>
        <input
            type="text"
            id="Measure"
            placeholder="Measure"
            className="form-control"
            value={this.state.measure}
            onChange={(event) =>
                this.setState({ measure: event.target.value })
              }
        />
    
        <label htmlFor="Grams" className="margin-BMI-form">Grams: </label>
        <input
            type="number"
            id="Grams"
            placeholder="Grams"
            className="form-control"
            value={this.state.grams}
            onChange={(event) =>
                this.setState({ grams: event.target.value })
              }
        />
    
        <label htmlFor="Calories" className="margin-BMI-form">Calories: </label>
        <input
            type="number"
            id="Calories"
            placeholder="Calories"
            className="form-control"
            value={this.state.calories}
            onChange={(event) =>
                this.setState({ calories: event.target.value })
              }
        />
    
        <label htmlFor="Carbs" className="margin-BMI-form">Carbs: </label>
        <input
            type="number"
            id="Carbs"
            placeholder="Carbs"
            className="form-control"
            value={this.state.carbs}
            onChange={(event) =>
                this.setState({ carbs: event.target.value })
              }
        />
    
        <label htmlFor="Category" className="margin-BMI-form">Category: </label>
        <input
            type="text"
            id="Category"
            placeholder="Category"
            className="form-control"
            value={this.state.category}
            onChange={(event) =>
                this.setState({ category: event.target.value })
              }
        />
    
        <div className="center">
            <button
                id="submitButton"
                type="submit"
                className="login__btn"
                
            >
                Add This Food Item to Database
            </button>
        </div>
                            </div>
                        </form>
                    </div>
                </div>
                </Layout>
        );
    }
}

export default AddFoodToDatabase;
