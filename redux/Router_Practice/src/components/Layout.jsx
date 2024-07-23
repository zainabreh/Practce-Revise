import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../Features/deposit/depositSlice";
import Total from "./Total";

const Layout = () => {
  const dispatch = useDispatch();
  const { depositReducer } = useSelector((v) => v.finalReducer);
  console.log(depositReducer.value);
  const depositAmount = () => {
    dispatch(deposit(10000));
  };
  return (
    <div>
      <Header />
      <div className="main_container">
        <h1>{depositReducer.value}</h1>
        <div className="product">
          <Outlet />
        </div>
        <div className="sidebar">
          <SideBar />
          <button
            onClick={depositAmount}
          >{`Deposit $${depositReducer.value}`}</button>
            <br/>
            <br/>
          <Total />
        </div>
      </div>
      <h1>{depositReducer.value}</h1>
      <Footer />
    </div>
  );
};

export default Layout;
