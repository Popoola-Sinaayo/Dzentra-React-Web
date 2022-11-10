import React, { useEffect, useState } from "react";
import "./App.css";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import DifferenceIcon from "@mui/icons-material/Difference";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import BarChartIcon from "@mui/icons-material/BarChart";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ReorderIcon from "@mui/icons-material/Reorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DoneIcon from "@mui/icons-material/Done";
import HiveIcon from "@mui/icons-material/Hive";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import DonutChart from "react-donut-chart";
import IconNav from "./Components/IconNav";
import FullNav from "./Components/FullNav";
function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <div className="body">
      <div className="App">
        {showNavBar === true ? (
          <IconNav />
        ) : (
          <FullNav />
        )}

        <div
          className={showNavBar === false ? "topnav fullpartdisplay" : "topnav"}
        >
          <ReorderIcon className="reoder-icon" onClick={toggleNavBar} />
          <div className="topnav__nav">
            <LocalOfferIcon className="topnav__icon" />
            <AddCircleIcon className="topnav__icon" />
            <PersonIcon className="topnav__icon" />
            <select name="select" className="topnav__select">
              <option value="english">English</option>
            </select>
          </div>
        </div>
        <div className={showNavBar === false ? "main fullpartdisplay" : "main"}>
          <Grid container spacing={2} className="main__top">
            <Grid item xs={12} md={3}>
              <div className="main__top_item">
                <div>
                  <p className="main__top__text">Pending Order</p>
                  <p className="main__top__number">202</p>
                </div>
                <div className="main__top__icon">
                  <WarehouseIcon className="warehouse-icon" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="main__top_item">
                <div>
                  <p className="main__top__text">Processing Order</p>
                  <p className="main__top__number">99</p>
                </div>
                <div className="main__top__icon">
                  <HiveIcon className="hive-icon" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="main__top_item">
                <div>
                  <p className="main__top__text">Ready to Deliver</p>
                  <p className="main__top__number">263</p>
                </div>
                <div className="main__top__icon">
                  <ThumbUpIcon className="thumb-icon" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="main__top_item">
                <div>
                  <p className="main__top__text">Delivered Order</p>
                  <p className="main__top__number">347</p>
                </div>
                <div className="main__top__icon">
                  <DoneIcon className="done-icon" />
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="main__part">
            <Grid item xs={12} md={8} className="main__part__sub1">
              <div className="main__part__header">
                <h1>Today's Delivery</h1>
                <div className="inputs">
                  <input
                    type="text"
                    className="main__part__input"
                    placeholder="Search here"
                  />
                  <select className="main__part__select" id="">
                    <option value="">All orders</option>
                  </select>
                </div>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <div className="main__part_item part1">
                    <div className="main_part_item__list">
                      <p className="main__top_item__text">989923823</p>
                      <p>ORD-8569</p>
                    </div>
                    <div className="main__top__icon">
                      <DoneIcon className="done-icon green" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="main__part_item part2">
                    <div className="main_part_item__list">
                      <p className="main__top_item__text">989923823</p>
                      <p>ORD-8569</p>
                    </div>
                    <div className="main__top__icon">
                      <DoneIcon className="done-icon green" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="main__part_item part3">
                    <div className="main_part_item__list">
                      <p className="main__top_item__text">989923823</p>
                      <p>ORD-8569</p>
                    </div>
                    <div className="main__top__icon">
                      <DoneIcon className="done-icon green" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="main__part_item part3">
                    <div className="main_part_item__list">
                      <p className="main__top_item__text">989923823</p>
                      <p>ORD-8569</p>
                    </div>
                    <div className="main__top__icon">
                      <DoneIcon className="done-icon green" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="main__part_item part4">
                    <div className="main_part_item__list">
                      <p className="main__top_item__text">989923823</p>
                      <p>ORD-8569</p>
                    </div>
                    <div className="main__top__icon">
                      <DoneIcon className="done-icon green" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="main__part_item part4">
                    <div className="main_part_item__list">
                      <p className="main__top_item__text">989923823</p>
                      <p>ORD-8569</p>
                    </div>
                    <div className="main__top__icon">
                      <DoneIcon className="done-icon green" />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="main__part__sub2">
                <div className="main__part__sub__div">
                  <p className="main__part__text">Overview</p>
                </div>
                <div className="doughnut">
                  <DonutChart
                    data={[
                      {
                        label: "Pending",
                        value: 5,
                        color: "#775DD0",
                      },
                      {
                        label: "Procesing",
                        value: 20,
                        color: "#faad41",
                      },
                      {
                        label: "Procesed",
                        value: 25,
                        color: "#2dce8a",
                      },
                      {
                        label: "Ready to Deliver",
                        value: 15,
                        color: "#0083ff",
                      },
                      {
                        label: "Delivered",
                        value: 35,
                        color: "#f4365c",
                      },
                    ]}
                    width={250}
                    height={400}
                    outerRadius={0.98}
                    innerRadius={0.45}
                    legend={false}
                    clickToggle={false}
                    colors={[
                      "#775DD0",
                      "#faad41",
                      "#2dce8a",
                      "#0083ff",
                      "#f4365c",
                    ]}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
