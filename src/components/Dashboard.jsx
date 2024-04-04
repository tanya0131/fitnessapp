import React from "react";
import Header from "./Header";
import Layout from "./UI/Layout";
import Cards from "./UI/Cards";
const Dashboard = () => {
    return (
        <div>
            <Layout>
                <Header></Header>
                <Cards></Cards>
            </Layout>
        </div>
    );
};
export default Dashboard;
