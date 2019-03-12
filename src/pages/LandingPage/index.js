import React from "react";

import CourseCard from "../../components/CourseCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

import HeaderImage from "../../images/Header/header-photo.jpg";
import CoinsIcon from "../../images/Card/coins.svg";
import SkillsIcon from "../../images/Card/skill-icon.svg";

import "./Landing.css";

const Cards = [
  {
    courseCategory: "ANDROID",
    courseName: "Android App Development Level 1",
    grades: "4-10",
    preRequesites: "Yes",
    Skills: ["Android", "Javascript", "React", "CSS"],
    coins: 1000,
    calendar: "17th Feb (in 4 days)",
    date: "Mon, Tue & Wed",
    time: "6:00PM to 7:00PM",
    amount: 6000
  },
  {
    courseCategory: "Web Development",
    courseName: "Web Development Level 1",
    grades: "4 - 12",
    preRequesites: "No",
    Skills: ["HTML", "CSS", "Javascript"],
    coins: 1000,
    calendar: "17th Feb (in 4 days)",
    date: "Mon, Tue & Wed",
    time: "6:00PM to 7:00PM",
    amount: 6000
  },
  {
    courseCategory: "Mixed reality",
    courseName: "Virtual Reality Level 1",
    grades: "5 - 12",
    preRequesites: "No",
    Skills: ["VR", "Javascript", "CSS", "React-VR"],
    coins: 1000,
    calendar: "17th Feb (in 4 days)",
    date: "Mon, Tue & Wed",
    time: "6:00PM to 7:00PM",
    amount: 8000
  }
]

function LandingPage() {
  return (
    <div className={"app-container"}>
      <div className={"app-header"}>
        <NavBar />
      </div>
      <div className={"hero-text-container"}>
        <div className={"header-text-container"}>
          <div className={'header-text'}>
            Welcome to the school of the future.
          </div>
          <div className={"header-sub-text-container"}>
            <div>
              Cutting-edge technology courses for Ages 8 - 18.
            </div>
            <div className={"header-sub-text-coin-container"}>
              Unlock 21st century skills, earn <img src={CoinsIcon} alt="coin-icon" />, and build
            </div>
            <div>
              a college-ready portfolio as you learn.
            </div>
          </div>
        </div>
        <div>
          <img className={"header-image"} src={HeaderImage} alt={"header-img"} />
        </div>
      </div>
      <div className={"course-card-containers"}>
        <div className={"card-course-containers"}>
          What do you want to learn?
        </div>
        <div style={{ width: "70%", margin: "0 auto" }}>
          <CourseCard />
        </div>
      </div>

      <div className={"upcoming-text-wrapper"}>
        <div className={"upcoming-text-container"}>
          Upcoming online courses
          <div className={"upcoming-live-container"}>
            <div className={"upcoming-live-dot"} />
            LIVE
          </div>
        </div>

        <div className={"upcoming-sub-text-container"}>
          Learn from live teachers,
          not pre-recorded videos, in our intelligent virtual classrooms.
        </div>

        <div className={"upcoming-grade-skill-container"}>
          <div className={"upcoming-grade-icon"}>
            <img src={SkillsIcon} alt="skills-icon" />
            = 21st century skills you’ll unlock
        </div>
          <div className={"upcoming-grade-icon"}>
            <img src={CoinsIcon} alt="coins-icon" />
            = coins you’ll earn for completion
        </div>
        </div>
      </div>

      <div className={"card-wrapper"}>
        {Cards.map(e => (
          <Card
            courseCategory={e.courseCategory}
            courseName={e.courseName}
            grades={e.grades}
            preRequesites={e.preRequesites}
            Skills={e.Skills}
            coins={e.coins}
            calendar={e.calendar}
            date={e.date}
            time={e.time}
            amount={e.amount}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage;