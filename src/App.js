import React from 'react';
import logo from './logo.svg';
import './App.css';

let firstImage = 'http://bit.ly/2rPkZgq';
let secondImage = 'http://bit.ly/2YagcST';
let thirdImage = 'https://cnn.it/2P5W93V';

function App() {
  return (
    <div className="App">
   <div className="New">
     <strong><p id="one"> One In Seven Billion</p></strong>
    </div>

    <div className="Content">
    <div className="flex-container">
    <p id="twoshift">
    <span class="twodate">Sep.30, 2019</span><br></br>
    <span class="shifty">ENVIRONMENT</span><br></br>
    <span class="title">Greta Thurenburg Sets Sail With 80 Year Old Sailor</span><br></br>
    <span class="conty">A woman who's been sailing her whole life was set to visit her grandkids in Greece this winter, but when she learned that the infamous Greta T needed a lift to Madrid for the Climate Conference, she prolonged her trip to save 2000 tons of carbon. </span><br></br>
    <span class="authy">By LILY ROSE</span> </p> 
    <img class= "kod" src ={firstImage} alt="kod" width="300" height="200" />
    
    
   <hr></hr>

    <p id="threecontent">
    <span class="threedate">Aug.30, 2019</span><br></br>
    <span class="shiftyy">SOCIETY</span><br></br>
    <span class="titlethree">A Mama's Boy</span><br></br>
    <span class="contythree">Twenty four year old Johny decided his paintings needed to be out of the gallery and in the home of his mothers' students at the homeless shelter.</span><br></br>
    <span class="authythree">By BEN SMITH</span> </p>
    <img class= "plane" src ={secondImage} alt="plane" width="300" height="200"/>
   

  <hr></hr>

    <p id="fourcontent">
    <span class="fourdate">Oct.29, 2019</span><br></br>
    <span class="shiftyy">UNIVERSITY</span><br></br>
    <span class="titlefour">University Students Put Down Their Resumes and Pick Up The Rescues</span><br></br>
    <span class="contyfour">Students moved back their senior recognition party to help out a local organization overwhelmed with an abundance of stray animals needing food and shelter. </span><br></br>
    <span class="authyfour">By SARAH JOHNSON</span></p>
    <img class= "man" src ={thirdImage} alt="man" width="300" height="200"/>

    <hr></hr>
    </div>
   </div>
   </div>
  );
}




export default App;
