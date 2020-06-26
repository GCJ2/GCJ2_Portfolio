import React, {useState, useEffect} from "react";
import axios from 'axios';
// import Slider from "react-slick";
// import FsLightbox from "fslightbox-react";
// import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Contact from "./Contact";
// import Service from '../components/Service';
// import Testimonial from '../components/Testimonial';

function About() {
  // const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  // console.log(information)
  // const [services, setServices] = useState([]);
  // const [reviews, setReviews] = useState([]);

  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   pauseOnHover: true,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //   ]
  // };
  //
  // const handleToggler = (event) => {
  //   setToggler({
  //     toggler: event
  //   })
  // }

  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setInformation(response.data)
      })
    // axios.get('/api/services')
    //   .then(response =>{
    //     setServices(response.data)
    //   })
    // axios.get('/api/reviews')
    //   .then(response =>{
    //     setReviews(response.data)
    //   })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me"/>
          <div className="row">
            <div className="col-lg-7">
              <div className="mi-about-content">
                <h3>
                  Hi, I'm <span className="color-theme">{information.name}</span>
                </h3>
                <p>Before entering the world of programming, I spent four years touring the country as a full-time
                  musician while supporting myself by teaching preschool and contracting for companies like SalesForce,
                  Microsoft, and Cisco.</p>
                <p>After touring, I spent a year at the University of South Carolina double-majoring in Spanish and
                  Linguistics before discovering the world of programming.</p>
                <p>I joined the bootcamp Lambda School's Full Stack Web Development program in the summer of 2019 and
                  have spent the last year building and maintaining web applications in React and Node.js, while
                  studying Python and the fundamentals of computer science along the way.</p>
                <p>In my spare time, I enjoy composing orchestral music, hiking, and all things outer space.</p>
                {/*<ul>*/}
                {/*  {!information.name ? null : <li>*/}
                {/*    <b>Full Name</b> {information.name}*/}
                {/*  </li>}*/}
                {/*  {!information.age ? null : <li>*/}
                {/*    <b>Age</b> {information.age} Years*/}
                {/*  </li>}*/}
                {/*  {!information.phone ? null : <li>*/}
                {/*    <b>Phone</b> {information.phone}*/}
                {/*  </li>}*/}
                {/*  {!information.nationality ? null : <li>*/}
                {/*    <b>Nationality</b> {information.nationality}*/}
                {/*  </li>}*/}
                {/*  {!information.language ? null : <li>*/}
                {/*    <b>Languages</b> {information.language}*/}
                {/*  </li>}*/}
                {/*  {!information.email ? null : <li>*/}
                {/*    <b>Email</b> {information.email}*/}
                {/*  </li>}*/}
                {/*  {!information.address ? null : <li>*/}
                {/*    <b>Address</b> {information.address}*/}
                {/*  </li>}*/}
                {/*  {!information.freelanceStatus ? null : <li>*/}
                {/*    <b>Freelance</b> {information.freelanceStatus}*/}
                {/*  </li>}*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
