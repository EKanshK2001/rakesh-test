import React from 'react'

const heading = {
  textAlign: "center",
  fontSize: "xxx-large",
  textDecoration: "underline",
  marginBottom: "25px",
  fontWeight: "900",
  color: "gold"
}

const subHeading = {
  fontFamily: "system-ui",
  textDecoration: "underline",
  textAlign: "center",
  marginBottom: "15px"
}

export default function About() {
  return (
    <div style={{color:"white", padding:"0px 50px", background: 'rgba(0,0,0,0.5)'}}>
        <h1 style={heading}>ABOUT US</h1>

        <div style={{fontFamily:"sans-serif", fontSize:"1.5rem"}}>

      <p>Hello Everyone, We are the Final year students of<span style={{color:"#FF5722"}}> GURU NANAK INSTITUTE OF TECHNOLOGY </span>
        persuing B-Tech in Computer Science Engineering. We have a group of SIX member, consisting a Team-leader.</p>

        <br />
        
       <pre style={{lineHeight:"1.5"}}>
        <h5 style={subHeading}>Team_Members are as followes :-</h5>
        
        Sarvesh Kumar Roy (04) <span style={{color: "#FF5722", fontStyle:"italic", fontWeight:"bold" }}>- Team Leader</span>  <br />
        Sayak Biswas (18) <br />
        Faiyaz Alam (09) <br />
        Anikesh Kumar Jha (29) <br />
        Subhajit Duta (39) <br />
        Manodip Ghosh (21) </pre>

        <br />

        <p>This is Final year Group Project, Where each and every group member has contributed according to their 
        set of skill to complete this project on Time. </p>


        <h3 style={{fontFamily:"cursive", marginTop:"20px"}}> Thank You For Reviewing our Project, Hope You Liked It. </h3>

        </div>


       
    </div>
  )
}
