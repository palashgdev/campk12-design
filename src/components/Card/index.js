import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import GradesIcon from "../../images/Card/grades.svg";
import PreReqIcon from "../../images/Card/pre-req.svg";
import SkillsIcon from "../../images/Card/skill-icon.svg";
import CoinIcon from "../../images/Card/coins.svg";

import CalendarIcon from "../../images/Card/calendarIcon.svg";
import DateIcon from "../../images/Card/dayicon.svg";
import TimeIcon from "../../images/Card/timeicon.svg";

import "./index.scss";

class Card extends Component {

  render() {
    const {
      courseCategory,
      courseName,
      grades,
      preRequesites,
      Skills,
      coins,
      calendar,
      date,
      time,
      amount
    } = this.props;
    return (
      <Fragment>
        <div className={"card-container"}>

          {/* IMage container */}
          <img className={"card-image-container"} src={"/images/Card/1.png"} alt="card-img" />
          <div className={"card-image-text-container"}>
            {courseCategory}
          </div>

          <div className={"card-sub-container"}>

            {/* Course Category Container */}
            <div className={"card-coursename-container"}>
              {courseName}
            </div>

            {/* Grades container */}

            <div className={"shadow"} />

            <div className={"card-grades-container"}>

              <div className={"card-grades-wrapper"}>
                <div className={`card-grades-sub-wrapper card-grades-sub-text`}>
                  <div className={`grade-image-wrapper card-grades-text`}>
                    <img className={"card-grades-icon"} src={GradesIcon} alt={"grades"} />
                    Grades
                  </div>
                  {grades}
                </div>
              </div>

              <div className={"card-grades-wrapper"}>
                <div className={`card-grades-sub-wrapper card-grades-sub-text`}>
                  <div className={`grade-image-wrapper card-grades-text`}>
                    <img className={"card-grades-icon"} src={PreReqIcon} alt={"grades"} />
                    PRE-REQ
                  </div>
                  {preRequesites}
                </div>
              </div>
            </div>

            <div className={"shadow"} />

            {/* Skills COntainer */}

            <div>
              <div className={"card-skill-container"}>
                <img className={"card-skill-icon"} src={SkillsIcon} alt="Skillicon" />

                {Skills.map((e, i) => {
                  if (i < 2) {
                    return (
                      <div className={"card-skill-text-container"}>
                        <div className={"card-skill-text"}>
                          {e}
                        </div>
                      </div>
                    )
                  }
                  return null;
                })}

                <div className={"card-skill-text-container"}>
                  <div className={"card-skill-text"}>
                    + {Skills.length - 2}
                  </div>
                </div>
              </div>


              <div className={"card-coin-container"}>
                <img className={"card-coin-icon"} src={CoinIcon} alt="Skillicon" />
                <div className={"card-skill-coin-container"}>
                  <div className={"card-coin-text"}>
                    + {coins}
                  </div>
                </div>
              </div>

            </div>

            <div className={"shadow"} />

            {/* Info container */}

            <div className={"card-info-container"}>
              <div className={"card-info-sub-container"}>
                <img className={"card-calendar-icon"} src={CalendarIcon} alt="date-icon" />
                {calendar}
              </div>
              <div className={"card-info-sub-container"}>
                <img className={"card-date-icon"} src={DateIcon} alt="date-icon" />
                {date}
              </div>
              <div className={"card-info-sub-container"}>
                <img className={"card-calendar-icon"} src={TimeIcon} alt="date-icon" />
                {time}
              </div>
            </div>

            <div className={"shadow"} />


            {/* button container */}

            <div className={"card-amount-container"}>
              <div className={"card-amount"}>
                Rs. {amount}
              </div>
              <div className={"card-amount-button"}>
                ENROLL
            </div>
            </div>

          </div>
        </div >
      </Fragment>
    )
  }
};

Card.propTypes = {
  courseCategory: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  grades: PropTypes.string.isRequired,
  preRequesites: PropTypes.string.isRequired,
  Skills: PropTypes.array.isRequired,
  coins: PropTypes.number.isRequired,
  calendar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Card;