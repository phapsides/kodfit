import React, { useState, useEffect } from 'react';
import './WorkoutList.css';
import SwipeableViews from 'react-swipeable-views';
import ExercisesData from './../../../Data/ExercisesData';
import ExerciseList from './../WorkoutExerciseList/WorkoutExerciseList';
import test from './../../../common/images/about.jpg';

const styles = {
    slide: {
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        backgroundImage: `url(${test})`,
    },
    slide2: {
        background: '#B3DC4A',
    },
    slide3: {
        background: '#6AC0FF',
    },
    slide4: {
        background: '#FEA900',
    },
    slide5: {
        background: '#B3DC4A',
    },
    slide6: {
        background: '#6AC0FF',
    },
};


function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}
 
export default function WorkoutList() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth
    });
    const isMobile = 640;


    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                width: window.innerWidth
            })
        }, 1000);
      
        window.addEventListener('resize', debouncedHandleResize);
      
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    });

    return (
        dimensions.width >= isMobile ? 
            <h1>Desktop component</h1> : 
            <div className="WorkoutList">
                <h2 className="WorkoutListTitle">Exercise List</h2>
                <SwipeableViews 
                    enableMouseEvents 
                    className="container"
                >
                    {
                        ExercisesData().map((exercise, index) => {
                            return (
                                <ExerciseList
                                    key={exercise.exerciseName}
                                    exerciseName={exercise.exerciseName}
                                    reps={exercise.reps}
                                    style={Object.assign({}, styles.slide, styles[`slide${index+1}`])}
                              />
                            );
                          })
                    }

                </SwipeableViews>
            </div>
    ); 
}
