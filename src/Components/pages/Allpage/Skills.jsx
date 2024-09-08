import React from 'react';
import '../Styles/Skills.scss';


const skills = [
  {
    category: 'Development',
    items: [
      { name: 'HTML5', logo: require('./Picture/Html.png') },
      { name: 'CSS3', logo: require('./Picture/Css.png') },
      { name: 'JavaScript', logo: require('./Picture/Js.png') },
      { name: 'TypeScript', logo: require('./Picture/Ts.png') },
      { name: 'React', logo: require('./Picture/React.png') },
      { name: 'Next.js', logo: require('./Picture/Next.png') },
      { name: 'Node.js', logo: require('./Picture/Ndj.png') },
      { name: 'TailwindCSS', logo: require('./Picture/tail.png') },
      { name: 'Mui', logo: require('./Picture/Mui.png') },
      { name: 'Sass', logo: require('./Picture/sass.png') },

    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', logo: require('./Picture/Fig.png') },
      { name: 'Canva', logo: require('./Picture/can.png') },
    ],
  },
  {
    category: 'Coding',
    items: [
      { name: 'Java', logo: require('./Picture/Java.png') },
      { name: 'Python', logo: require('./Picture/Pyt.png') },
      { name: 'JavaScript', logo: require('./Picture/Js.png') },
      { name: 'C/C++', logo: require('./Picture/Cppp.png') },
      
    ],
  },
];

const Skill = () => {
  return (
    <div className="skills-container">
      {skills.map((skillCategory, index) => (
        <div key={index} className={`skill-category skill-category-${index}`}>
          
          <h2>&lt;{skillCategory.category}/&gt;</h2>
          <div className="skill-items">
            {skillCategory.items.map((item, idx) => (
              <div key={idx} className="skill-item">
                <img src={item.logo} alt={`${item.name} logo`} className="skill-logo" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
