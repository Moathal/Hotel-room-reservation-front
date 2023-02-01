import { Bed, CircleOutlined, Dashboard } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import './sideRoute.css';

export default function sideRoute() {
  return (
    <div
      className=" show dropdown-menu-dark bg-dark me-side-bar"
      tabIndex="-1"
      id="offcanvasDark"
      aria-labelledby="offcanvasDarkLabel"
    >
      <div className="offcanvas-header text-white">
        <h5 className="offcanvas-title" id="offcanvasDarkLabel">
          Sleep over
        </h5>
        <h5 className="offcanvas-title" id="offcanvasDarkLabel">
          Admin
        </h5>
      </div>
      <ul className="offcanvas-body my-2">
        <li className="offcanvas-body ABTitleNav mb-2 d-flex justify-content-start align-items-center gap-3">
          <Dashboard style={{ backgroundColor: '#fff' }} />
          <Link to="/admin">Dashboard</Link>
        </li>
        <li className="offcanvas-body ABTitleNav mb-2 d-flex justify-content-start align-items-center gap-3">
          <HotelIcon style={{ backgroundColor: '#fff' }} />
          <Link to="/ManageHotel">Manage Hotel</Link>
        </li>
        <li className="offcanvas-body ABTitleNav mb-2 d-flex justify-content-start align-items-center gap-3">
          <Bed style={{ backgroundColor: '#fff' }} />
          <Link to="/manageRoom">Manage Room</Link>
        </li>
        <li className="offcanvas-body ABTitleNav mb-2 d-flex justify-content-start align-items-center gap-3">
          <CircleOutlined style={{ backgroundColor: '#fff' }} />
          <Link to="/reserved-room">Reservations</Link>
        </li>
      </ul>
    </div>
  );
}
