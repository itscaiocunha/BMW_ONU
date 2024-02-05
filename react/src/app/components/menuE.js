import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const profileE = () => {
  window.location.href ='../perfil_empresa';
};
const homeE = () => {
  window.location.href ='../empresa';
};

export default function MenuE() {
  return (
    <span>

      <input type="checkbox" id="check-menu-c" ></input>
      <ul id="menu-c">


        <li>
          <label for="check-menu-c">
            <MenuRoundedIcon />
          </label>
        </li>
        <li>
          <label onClick={homeE}>
            <HomeRoundedIcon />
          </label>
        </li>
        <li>
        <label onClick={profileE}>
            <AccountCircleRoundedIcon />
          </label>
        </li>
        <li>
        <label onClick={profileE}>
            <SettingsRoundedIcon />
          </label>
        </li>
      </ul>
    </span>
  );
}
