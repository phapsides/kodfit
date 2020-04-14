import React from 'react';
import './WorkoutExerciseList.css';


export default class ExerciseList extends React.Component {

  render() {
    let { exerciseName, reps, style } = this.props;

    return (
          <div 
          style={style}
          className="item">
            <p className="detailsName">{exerciseName}</p>
            <p className="detailsReps">{reps}</p>
          </div>
    )

}
}

