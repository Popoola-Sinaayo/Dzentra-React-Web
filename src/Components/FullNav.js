import React from 'react';
import '../App.css'
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

function FullNav() {
  return (
    <>
      <div className="navbar fulldisplay">
        <div className="navbar__item">
          <div className="flex-component image">
            <ImageIcon className="icon" />
            <p>LAUNDRY</p>
          </div>
        </div>
        <div className="navbar__item active">
          <div className="flex-component">
            <HomeIcon className="icon" />
            <p>Dashboard</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <LocalOfferIcon className="icon tag-icon" />
            <p>Pos</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <ApartmentIcon className="icon apartment-icon" />
            <p>Orders</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <FormatListBulletedIcon className="icon list-icon" />
            <p>Order Status Screen</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <PersonIcon className="icon person-icon" />
            <p>Customers</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <DifferenceIcon className="icon duplicate-icon" />
            <p>Expenses</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <BarChartIcon className="icon bar-icon" />
            <p>Reports</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <LocalOfferIcon className="icon tag2-icon" />
            <p>Services</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <SettingsIcon className="icon setting-icon" />
            <p>Tools</p>
          </div>
        </div>
        <div className="navbar__item temp-active">
          <div className="flex-component">
            <PowerSettingsNewIcon className="icon power-icon" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullNav