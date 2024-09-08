import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import '../Styles/Project.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Reactimg from './Picture/React.png';
import Scss from './Picture/sass.png';
import Mui from './Picture/Mui.png';
import Csslogo from './Picture/Css.png';
import jsLogo from './Picture/Js.png';



import projectOneImage from '../Allpage/Picture/app1.png';
import projectTwoImage from '../Allpage/Picture/app2.png'; 
import projectThreeImage from '../Allpage/Picture/MyBaagw2.png'; 
import projectFourImage from '../Allpage/Picture/myport1.png';

const projects = [
  {
    id: 1,
    title: " 🤖 Rract-Native App 📱",
    description: "MyBaag (Application): The Ultimate Destination for Plants and Garden Products . The E-Commerce Application for all your gardening and home décor needs! Designed with plant enthusiasts and home decorators in mind, MyBaag offers a comprehensive shopping experience that brings nature and style to your doorsteps..",
    skills: [
      { name: "ReactNative", logoUrl: Reactimg }, 
      { name: "css", logoUrl: Csslogo },
      { name: "JavaScript", logoUrl: jsLogo },
    ],
    imageUrl: projectOneImage, 
    githubUrl: "https://github.com/DevRajput01/RNative2",
    liveUrl:"https://github.com/DevRajput01/RNative2",
  },
  {
    id: 2,
    title: "💡 React-Native App 📱",
    description: "A Movie-fetching application that integrates with external APIs to display the latest movies, genres, and details like IMDB Rating and Name. It features a sleek user interface with search functionality and the ability to explore trending films.",
    skills:  [
      { name: "ReactJs", logoUrl: Reactimg }, 
      { name: "scss", logoUrl: Scss },
      { name: "Mui", logoUrl: Mui },
    ],
    imageUrl: projectTwoImage, 
    githubUrl: "https://github.com/DevRajput01/RNative1",
    liveUrl:"https://github.com/DevRajput01/RNative1",

  },
  {
    id: 3,
    title: "🍃 React-Js Web Page 🍂",
    description: "MyBaag is an e-commerce website built with React.js, dedicated to offering a wide variety of plants and garden-related products. ",
    skills:  [
      { name: "ReactNative", logoUrl: Reactimg }, 
      { name: "css", logoUrl: Csslogo },
      { name: "Mui", logoUrl: Mui },
      { name: "JavaScript", logoUrl: jsLogo },
    ],
    imageUrl: projectThreeImage, 
    githubUrl: "https://github.com/DevRajput01/MBWeb",
    liveUrl:"https://mybaag.netlify.app/",
  },
  {
    id: 4,
    title: "🧬 React Portfolio 🧬",
    description: "Description of project four.",
    skills:  [
      { name: "ReactNative", logoUrl: Reactimg }, 
      { name: "css", logoUrl: Csslogo },
      { name: "Mui", logoUrl: Mui },
      { name: "JavaScript", logoUrl: jsLogo },
    ],
    imageUrl: projectFourImage, 
    githubUrl: "https://github.com/DevRajput01/ReactPort1",
    liveUrl:"https://devendra12.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="Project" className="project-section">
      <div className="button-container">
        <button className="btn">
          <div className="wrapper">
            <p className="text">Projects</p>
            <div className="flower flower1">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower2">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower3">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower4">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower5">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower6">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
          </div>
        </button>
      </div>

      <Swiper
  spaceBetween={50}
  slidesPerView={1}
  loop={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  modules={[Pagination, Autoplay]} // Remove Navigation from modules
>
  {projects.map((project) => (
    <SwiperSlide key={project.id}>
      <div className="swiper-project-card">
        <div className="left-section">
          <img className="image" src={project.imageUrl} alt={project.title} />
          
          <div className='live-btn'>
            <a href={project.githubUrl} className="github-btn" target="_blank" rel="noopener noreferrer">
              GitHub Repo 🔖
            </a>
            <a href={project.liveUrl} className="livelink-btn" target="_blank" rel="noopener noreferrer">
              Live Link 📌
            </a>
          </div>
        </div>
        <div className="right-section">
          <h2 className="title">{project.title}</h2>
          <p className="description">{project.description}</p>
          <div className="skills">
  {project.skills.map((skill, index) => (
    <div key={index} className="skill-icon">
      <img src={skill.logoUrl} alt={skill.name} title={skill.name} />
    </div>
  ))}
</div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default Project;
