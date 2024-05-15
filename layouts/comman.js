// Layout.js
import { Header } from "../components/header";
import { SearchBar } from "../components/home/searchBar";
import { EventCard } from "../components/eventCard";
import { MainCategories } from "../components/home/mainCategories";

import React from 'react';

const CommanLayout = ({ children }) => {
  return (
    <div className="" style={{
      // height: '110vh'
      display:'flex',
      backgroundColor:'red',
      justifyContent:'center'
    }}>

      <div className="mainContainer">
        // <div className="container">
          <Header />

          {children}

        </div>
      </div >
    </div>
  );
};

export default CommanLayout;
