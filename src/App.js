import React, {useEffect, useState} from 'react';
import { askForPermissionToReceiveNotifications } from "./init-fcm";
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';



let firstImage = 'http://bit.ly/2rPkZgq';
let secondImage = 'http://bit.ly/2YagcST';
let thirdImage = 'https://cnn.it/2P5W93V';

function App() {

  const [payload, setPayload] = useState();

  useEffect(() => {

    firebase.messaging().onMessage(payload => {
      console.log("Payload received: ", payload);
      //alert(payload.notification.body);
      setPayload(payload);

    })
  });
  
  return (
  <div className="App">
  <div className="New">
    <img src ='https://i.ibb.co/nmBrw6H/one.png' ></img>
  </div>
  <div id='center'>
    <p id = 'cent'>Receive a daily news story about someone doing something selfless in the world <br></br>to remind yourself that its not all about you!</p>
    <button id='button' button onClick={askForPermissionToReceiveNotifications}>SUBSCRIBE</button>
  </div>
  
  <div className="Content">
  <div className="flex-container">
    
  <div class='row'>
  <div class='column left'>
    <img src ={firstImage} alt="kod" width="300" height="200"/>
  </div>
  <div>
    <span class="date">May 31, 2018</span><br></br>
    <span class="shifty">SOCIETY</span><br></br>
    <span class="title">Eight-year-old boy selflessly helps elderly woman struggling to climb stairs</span><br></br>
    <span class="conty"> Maurice Adams Jr. was in the car with his mom in Milledgeville, Georgia, this week when he spotted a senior he didn't know struggling at an intersection. So, he did what any perfect gentleman would do: he got out to help her.</span> <a href="https://www.ctvnews.ca/lifestyle/eight-year-old-boy-selflessly-helps-elderly-woman-struggling-to-climb-stairs-1.3953446"> READ THE FULL STORY</a><br></br>
    <span class="authy">By MATTHEW TALBOT</span>
  </div>
  </div>

  <div class='row'>
  <div class='column left'>
    <img src ={secondImage} alt="plane" width="300" height="200"/>
  </div>
  <div>
    <span class="date">Aug.30, 2019</span><br></br>
    <span class="shifty">SOCIETY</span><br></br>
    <span class="title">A Mama's Boy</span><br></br>
    <span class="conty">Twenty four year old Johny decided his paintings needed to be out of the gallery and in the home of his mothers' students at the homeless shelter.</span> <a href="link.com"> READ THE FULL STORY</a><br></br>
    <span class="authy">By BEN SMITH</span>
  </div>
  </div>

  <div class='row'>
  <div class='column left'>
    <img class= "man" src ={thirdImage} alt="man" width="300" height="200"/>
  </div>
  <div>
    <span class="date">Oct.29, 2019</span><br></br>
    <span class="shifty">UNIVERSITY</span><br></br>
    <span class="title">University Students Put Down Their Resumes and Pick Up The Rescues</span><br></br>
    <span class="conty">Students moved back their senior recognition party to help out a local organization overwhelmed with an abundance of stray animals needing food and shelter.</span> <a href="link.com"> READ THE FULL STORY</a><br></br>
    <span class="authy">By SARAH JOHNSON</span>
  </div>
  </div>
    </div>
   </div>
   </div>
  );
}




export default App;
