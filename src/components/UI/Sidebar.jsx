import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUtensils, faRunning, faUsers,faBicycle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
       <div className="animated-icon">
        <FontAwesomeIcon icon={faBicycle} size="5x" color="grey"  />
      </div>
      <Link to="/dash">
        <button type="submit" className="login_btn">
          <FontAwesomeIcon icon={faChartBar} className="icon" />
          <span className="link-text">Dashboard</span>
        </button>
      </Link>

      <Link to="/planner">
        <button type="submit" className="login_btn">
          <FontAwesomeIcon icon={faUtensils} className="icon" />
          <span className="link-text">Plan diet</span>
        </button>
      </Link>

      <Link to="/planactivity">
        <button type="submit" className="login_btn">
          <FontAwesomeIcon icon={faRunning} className="icon" />
          <span className="link-text">Plan Activities</span>
        </button>
      </Link>

      <Link to="/subs">
        <button type="submit" className="login_btn">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <span className="link-text">Subscription</span>
        </button>
      </Link>
    </div>
  );
}

export default Sidebar;
