// Layout.js
import { Header } from "../components/header";
import { SearchBar } from "../components/home/searchBar";
import { EventCard } from "../components/eventCard";
import { MainCategories } from "../components/home/mainCategories";

import React from 'react';

const CommanLayout = ({ children }) => {
  return (

    <div class="bg-containerColor max-w-lg mx-auto p-1 rounded-xl ">

      <div class="">


        <Header />

        {children}
      </div>


    </div>
  );
};

export default CommanLayout;
