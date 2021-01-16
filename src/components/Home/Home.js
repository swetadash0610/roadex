import React from 'react';
import './Home.css';
import Navbar from "../Includes/Navbar/Navbar"
import Footer from "../Includes/Footer/Footer"
import EnhancedTable from "../Admin/Admin"

const Home= () =>{
  return (
      <div>
        <Navbar />
        <EnhancedTable />

        <Footer />
      </div>
  );
}
export default Home;