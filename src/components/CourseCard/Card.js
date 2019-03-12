import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Card.css";

function CourseCard({ name, icon }) {
  return (
    <Fragment>
      <div className={"course-card-container"}>
        <div className={"course-card-image-container"}>
          <img src={icon} alt="icon" />
        </div>
        <div className={"course-card-text"}>
          {name}
        </div>
      </div>
    </Fragment >
  )
}

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default CourseCard;