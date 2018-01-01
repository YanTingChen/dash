import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div class="about">
                <div >
                    <h1>About  me</h1>
                    
                    <div class="self">
                        <img class="ui large rounded image .img-fluid" src="./01.jpg" alt='myself' />
                    </div>
                    <div class="skill">
                        <h2>Yan Ting Chen&emsp;|&emsp;Tom Chen&emsp;|&emsp;陳彥廷</h2>
                        <h2>Presentation</h2>
                            <p>Bootstrap, Css, Html, semantic-ui, material-ui, Sass</p>
                        <h2>Javascript</h2>
                            <p>Gulp, jQuery, React, React Native, Webpack</p>
                        <h2>Server</h2>
                            <p>Express, Mongo, Node, MySQL, PHP, Python</p>
                        <h2>Other</h2>
                            <p>C, Git, Robotframework, Openshift, Photoshop CS5</p>
                    </div>
                    
                    <div class="pas">
                        <h2>
                        <hr class="ui divider"/>
                        <p>
                    I'm Tom Chen, a software engineer and web developer. 
                    I first began my journey into code whilst studying Information management at <a href="www.nutc.edu.tw/">NUTC</a> . 
                                During my final year, I juggled assignments with part time work at <a href="https://exosite.com/">Exosite</a> where I 
                                learn automated tests and develope website,I gained a considerable amount of experience from there.
                        </p>
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;
