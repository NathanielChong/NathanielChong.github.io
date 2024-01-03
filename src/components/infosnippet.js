import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';


function InfoSnippet() {
  return (
    <div id="info" className="centered">
      <h2>Hi! I'm Nathan. Right now I'm in: <a href="https://visitseattle.org/" target="_blank" color="green" className="link">Seattle</a></h2>
      <h3> I'm a software engineer at <a href="https://www.metacareers.com/" target="_blank" className="link">Meta</a> </h3>
      <h3>Say hello at: <a href="mailto:nychong@umich.edu" className="link">nychong@umich.edu</a>!</h3>

      <div id="icons">
        <a href="https://www.linkedin.com/in/nathanielychong/">
          <i class="fa fa-linkedin fa-3x" aria-hidden="true"></i>
        </a>

        <a class="nonMidIcon" href="https://github.com/NathanielChong">
          <i class="fa fa-github fa-3x" aria-hidden="true"></i></a>

        <a class="nonMidIcon" href="mailto:nychong@umich.edu"><i class="fa fa-envelope-square fa-3x"></i>
        </a>

      </div>
    </div>
  )
}

export default InfoSnippet;