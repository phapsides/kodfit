import React from "react";
import "./OurGoal.css";
import "animate.css";
import "hover.css";
import { Link } from "react-router-dom";
import Goal from "../../common/images/goal.jpg";
import { FaDumbbell, FaChartLine, FaHeartbeat } from "react-icons/fa";

export default function OurGoal() {
  return (
    <div className="OurGoal">
      <div className="copy">
        <h1 className="separator-left">Our Goal</h1>
        <p className="subtext">
          Our goal is to put you in touch with gyms and personal trainers nearby.
          In the age of Kodfit, winning is easier than ever before.
        </p>
        <div className="iconAndText">
          <div className="icon animated fadeInLeft delay-1s">
            <FaDumbbell />
          </div>
          <p className="slidingText animated fadeInRight delay-1s">
            ...Put you in touch with gyms and trainers nearby
          </p>
        </div>
        <div className="iconAndText">
          <div className="icon animated fadeInLeft delay-2s">
            <FaHeartbeat />
          </div>
          <p className="slidingText animated fadeInRight delay-2s">
            ...Deliver a workout routine tailored to your goals
          </p>
        </div>
        <div className="iconAndText">
          <div className="icon animated fadeInLeft delay-3s">
            <FaChartLine />
          </div>
          <p className="slidingText animated fadeInRight delay-3s">
            ...Keep track of your progress as you get healthier
          </p>
        </div>
        <blockquote>
          The fitter, stronger you is closer than you think
        </blockquote>
        <button className="button primary rounded-capsule">
          <Link to="/login">
            Join The Revolution
          </Link>
        </button>
      </div>
      <div className="image">
        <img className="image" src={Goal} alt="Goal" />
      </div>
    </div>
  );
}