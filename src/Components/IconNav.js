import React from "react";
import "../App.css";
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
function IconNav() {
  return (
    <div className="navbar display">
      <div className="navbar__item">
        <ImageIcon className="icon image image-single" />
      </div>
      <div className="navbar__item">
        <HomeIcon className="icon single-icon icon-active" />
      </div>
      <div className="navbar__item">
        <LocalOfferIcon className={"icon single-icon tag-icon"} />
      </div>
      <div className="navbar__item">
        <ApartmentIcon className="icon single-icon apartment-icon" />
      </div>
      <div className="navbar__item">
        <FormatListBulletedIcon className="icon single-icon list-icon" />
      </div>
      <div className="navbar__item">
        <PersonIcon className="icon single-icon person-icon" />
      </div>
      <div className="navbar__item">
        <DifferenceIcon className="icon single-icon duplicate-icon" />
      </div>
      <div className="navbar__item">
        <BarChartIcon className="icon single-icon bar-icon" />
      </div>
      <div className="navbar__item">
        <LocalOfferIcon className="icon single-icon tag2-icon" />
      </div>
      <div className="navbar__item">
        <SettingsIcon className="icon single-icon setting-icon" />
      </div>
      <div className="navbar__item">
        <PowerSettingsNewIcon className="icon single-icon power-icon" />
      </div>
    </div>
  );
}

export default IconNav;
