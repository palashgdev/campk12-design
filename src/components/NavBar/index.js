import React, { Component } from "react";

import Logo from "../../images/logo.svg";
import NotificationIcon from "../../images/Navbar/Notification.svg";
import LeaderBoardIcon from "../../images/Navbar/LeaderBoard.svg";
import SkillIcon from "../../images/Card/skill-icon.svg";

import ArrowIcon from "../../images/Navbar/arrow.svg";

import "./index.css";

class Navbar extends Component {
  state = {
    scroll: 0
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentDidUpdate() {
    const { scroll } = this.state;
    const el = document.querySelector("#nav");
    const el1 = document.querySelector(".nav-container");
    if (scroll > 0.2) {
      el.style.background = "rgb(43, 145, 237)";
      el.style.transition = ".5s ease";
      el.style.zIndex = 1;

      el1.style.background = "rgb(43, 145, 237)";
      el1.style.transition = ".5s ease";
      el1.style.zIndex = 1;
    } else {
      el.style.background = "rgba(43, 145, 237,0.1)";
      el.style.zIndex = 0;

      el1.style.background = "rgba(43, 145, 237,0.1)";
      el1.style.zIndex = 0;
    }
  }

  handleScroll = () => {
    const { scrollY } = window;
    this.setState({ scroll: scrollY });
  };

  render() {
    return (
      <div className={"nav-bar-container"}>
        <div className={"nav-container"}>
          <nav id="nav" className={"nav-bar-sub-container"}>
            <div className="nav-bar-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="nav-bar-label-toggle">
              <span />
            </label>

            <div className="nav-bar-main-menu-container">
              <div className={"nav-bar-leaderboard-icon"}>
                <img
                  className={"icon"}
                  src={LeaderBoardIcon}
                  alt="LeaderBoard"
                />
              </div>

              <div className={"nav-bar-notification"}>
                <img src={NotificationIcon} alt="notfication-icon" />
                <div className={"nav-bar-notification-no"}>2</div>
              </div>

              <div style={{ display: "flex" }}>
                <div className={"nav-bar-account-container"}>
                  <img
                    className={"nav-bar-account-container-skill-icon"}
                    src={SkillIcon}
                    alt="skill-icon"
                  />
                  <div className={"nav-bar-account-text-container"}>100</div>
                  <img
                    className={"nav-bar-account-image"}
                    src={"/images/Card/1.png"}
                    alt="account"
                  />
                </div>

                <div className={"nav-bar-arrow-icon"}>
                  <img src={ArrowIcon} alt="arrrow-icon" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
