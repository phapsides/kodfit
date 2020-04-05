import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import heroImage from './../common/images/hero-image.jpg';

export default function LandingPage() {
    return (
        <main className="LandingPage">
            <div className="hero">
                <div className="hero-overlay">
                    <h1>Train &amp; Feel<br />Better Together</h1>
                    <button class="btn btn-transparent rounded-capsule">
                        Register Now
                    </button>
                </div>
                <img src={heroImage} alt="Hero" className="hero-image" />
            </div>
            <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-md-6">
                        <div>
                            <h4>About us</h4>
                            <p>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            </p>
                            <Link className="read-more" to="/">Read more</Link>
                            <img className="descriptive" src="https://picsum.photos/id/227/300/400" alt="alternative" />
                        </div>
                    </div>
                    <div className="column-xs-12 column-md-6">
                        <div>
                            <h4>What is our goal</h4>
                            <p>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            </p>
                            <Link className="read-more" to="/">Read more</Link>
                            <img className="descriptive" src="https://picsum.photos/id/98/300/400" alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

