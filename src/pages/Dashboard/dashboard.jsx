import React from "react";

import Portfolio from "./components/portfolio";
import DashboardLayout from "../../components/DashboardLayout";


const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
    <Portfolio/>
    
    </DashboardLayout>

  );
};

export default Dashboard;
