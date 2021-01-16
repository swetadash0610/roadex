import React from 'react';
import './Home.css';
import Navbar from "../Includes/Navbar/Navbar"
import Footer from "../Includes/Footer/Footer"
// import EnhancedTable from "../Admin/Admin"
import ComplaintForm from "../user/ComplaintForm"

const Home= () =>{
  return (
      <div>
        <Navbar />
        {/* <EnhancedTable /> */}
        <ComplaintForm />
        <Footer />
      </div>
  );
}
export default Home;