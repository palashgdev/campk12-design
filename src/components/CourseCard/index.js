import React, { Fragment, Component } from "react";
import Card from "./Card";

import Slider from "react-slick";

import AiIcon from "../../images/CourseCard/ai-icon.svg";
import VrIcon from "../../images/CourseCard/virtual-reality-icon.svg";
import AppDIcon from "../../images/CourseCard/app-development-icon.svg";
import WebDIcon from "../../images/CourseCard/web-development-icon.svg";

import LeftArrowIcon from '../../images/CourseCard/left-arrow-icon.svg';
import RightArrowIcon from "../../images/CourseCard/right-arrow-icon.svg";
import Arrow from "./Arrow";

const Cards = [
  {
    icon: AiIcon,
    name: "Machine Learning (AI)"
  },
  {
    icon: VrIcon,
    name: "Mixed Reality (AR/VR)"
  },
  {
    icon: AppDIcon,
    name: "Mobile App Development"
  },
  {
    icon: WebDIcon,
    name: "Web Development"
  },
  {
    icon: WebDIcon,
    name: "Web Development"
  }
];


class CourseCard extends Component {

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      adaptiveHeight: true,
      nextArrow: <Arrow icon={RightArrowIcon} />,
      prevArrow: <Arrow icon={LeftArrowIcon} />,
    }

    return (
      <Fragment>
        <Slider {...settings}>
          {Cards.map((e, i) => <div><Card key={i} icon={e.icon} name={e.name} />
          </div>)}
        </Slider>
      </Fragment>
    )
  }
}

export default CourseCard;