import React from 'react';
import './Home.css';
import Navbar from "../Includes/Navbar/Navbar"
import Footer from "../Includes/Footer/Footer"
// import EnhancedTable from "../Admin/Admin"
import ComplaintForm from "../user/ComplaintForm";
import Card from './card';

const Home= () =>{
  return (
      <div>
        <Navbar />
        {/* <EnhancedTable /> */}
        {/* <ComplaintForm /> */}

        <div className="body bg-home">
            <div className="panel">
              <div className="panel-solo">
                <Card text="USER PANEL" />
              </div>
              <div className="panel-solo">
                <Card text="ADMIN PANEL" />
              </div>
            </div>
            
          </div>


        <Footer />
      </div>
  );
}
export default Home;