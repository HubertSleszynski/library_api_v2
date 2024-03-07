import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Books Found Simple.</h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Embark on a bookish journey to find your next adventure. Our
            powerful search engine makes discovering thrilling stories quick and
            easy. Your next favorite book is just a click away
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
