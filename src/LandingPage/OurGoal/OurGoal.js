import React from "react";
import "./OurGoal.css";
// import motivational from "../../common/images/ourGoal-motivational.jpg";
// import jogger from "../../common/images/female-jogger.jpg";
import swimmer from "../../common/images/ourGoal-swimming.jpg";
import { FaDumbbell, FaChartLine, FaHeartbeat } from "react-icons/fa";

export default function OurGoal() {
  return (
    <div className="OurGoal">
      <h1>Our Goal</h1>
      <hr />
      <p>
        Our goal is to put you in touch with gyms and personal trainers nearby.
        In the age of Kodfit, winning is easier than ever before.
      </p>

      <div className="container">
        <div className="overlay">
          <div className="iconAndText">
            <div className="icon">
              <FaDumbbell />
            </div>
            <p>Put you in touch with gyms and trainers nearby</p>
          </div>
          <div className="iconAndText">
            {/* <div className="icon"><FaHeartbeat /></div> */}
            <div className="icon">
              <FaHeartbeat />
            </div>
            <p>Deliver you a workout routine tailored to your goals</p>
          </div>
          <div className="iconAndText">
            <div className="icon">
              {/* <ProgressIcon /> */}
              <FaChartLine />
            </div>
            <p>Keep track of your progress as you get healthier</p>
          </div>
        </div>
        <img className="image" src={swimmer} alt="Swimmer" />
      </div>

      <p>
        {" "}
        The fitter, stronger you is closer than you think! (Link to Nearby Gyms)
      </p>
      <button>Find your nearest gyms!</button>
      <button>Find your nearest personal trainer!</button>
    </div>
  );
}

// eslint-disable-next-line
{
  /* <img src={motivational} alt="Motivational" /> */
  /* <img src={jogger} alt="Joger" /> */
  /* <p>
We want to make fitness easy. It fits in with your schedule you needn't
travel far. Our goal is to prove that a healthy you is right around the
corner.
</p> */
}
