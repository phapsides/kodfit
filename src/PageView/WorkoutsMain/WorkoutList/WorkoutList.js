import React from 'react';
import './WorkoutList.css';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        background: '#FEA900',
    },
    slide2: {
        background: '#B3DC4A',
    },
    slide3: {
        background: '#6AC0FF',
    },
};


export default function WorkoutList() {
    return (
        <div className="WorkoutList">
            <h2 className="WorkoutListTitle">Exercise List</h2>
            <SwipeableViews 
                enableMouseEvents 
                className="container"
            >
                <div
                    className="container-content"
                    style={Object.assign({}, styles.slide, styles.slide1)}
                >
                    Exercise list A
                </div>
                <div 
                    className="container-content"
                    style={Object.assign({}, styles.slide, styles.slide2)}
                >
                    Exercise list B
                </div>
                <div 
                    className="container-content"
                    style={Object.assign({}, styles.slide, styles.slide3)}
                >
                    Exercise list C
                </div>
                <div 
                    className="container-content"
                    style={Object.assign({}, styles.slide, styles.slide3)}
                >
                    Exercise list D
                </div>
                <div 
                    className="container-content"
                    style={Object.assign({}, styles.slide, styles.slide3)}
                >
                    Exercise list E
                </div>
                <div 
                    className="container-content"
                    style={Object.assign({}, styles.slide, styles.slide3)}
                >
                    Exercise list F
                </div>
            </SwipeableViews>
        </div>
    );
}