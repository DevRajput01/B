import * as React from 'react';
import { Box } from '@mui/system';
import '../Styles/About.scss';
import SchoolIcon from '@mui/icons-material/School';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab } from '@mui/base/Tab';
import College1 from './Picture/College1.jpeg';
import College2 from './Picture/College2.jpeg';
import School from './Picture/School.jpeg';

export default function UnstyledTabsVertical() {
  return (
    <BaseTabs defaultValue={0} className="tabs-container">
      <BaseTabsList className="tabs-list">
        <BaseTab className="tab">
          <WorkHistoryIcon />
          Experience
        </BaseTab>
        <BaseTab className="tab">
          <SchoolIcon />
          Education
        </BaseTab>
        <BaseTab className="tab">
          <MilitaryTechIcon />
          Achievements
        </BaseTab>
      </BaseTabsList>
      <BaseTabPanel value={0} className="tab-panel">
        <Box className="box1Ex">
          <Box className="heading-row">
            <h3>Stayflexi</h3>
            <Box className="sub-heading-row">
              <h4>Frontend Developer</h4>
              <h4>(Internship)</h4>
            </Box>
          </Box>
          <Box className="details-row">
            <h4> <AddLocationAltIcon /> Bangalore, India</h4>
            <h4>June 2024 - August 2024</h4>
          </Box>
          <p>
            During my internship at Stayflexi, I had the opportunity to:
            <ul>
              <li>Learn and apply React.js and SCSS to build responsive and dynamic web applications.</li>
              <li>Expand my knowledge in mobile app development using React Native, creating cross-platform applications.</li>
              <li>Collaborate with an amazing tech team to contribute to the development and enhancement of company software, gaining valuable industry experience.</li>
            </ul>
          </p>
        </Box>
        <Box className="box1Ex">
          <Box className="heading-row">
            <h3>TP Cell, Mimit Malout</h3>
            <Box className="sub-heading-row">
              <h4>Senior Graphic Designer</h4>
              <h4>(College Time)</h4>
            </Box>
          </Box>
          <Box className="details-row">
            <h4> <AddLocationAltIcon /> MIMIT Malout</h4>
            <h4>June 2023 - Present</h4>
          </Box>
          <p>
            During my work at TP cell, I had the opportunity to:
            <ul>
              <li>Led the design and development of innovative graphics for promotional materials and digital media.</li>
              <li>Managed a team of designers to deliver high-quality visual content on time, contributing to successful marketing campaigns and events.</li>
            </ul>
          </p>
        </Box>
      </BaseTabPanel>
      <BaseTabPanel value={1} className="tab-panel">
        <Box className="box1Ex">
          <Box className="heading-row">
            <h3>BTech. in Computer Science and Engineering</h3>
          </Box>
          <Box className="details-row">
            <h4>MIMIT Malout, Punjab</h4>
            <h4>___CGPA</h4>
          </Box>
          <Box className="details-row">
            <h4>IK Gujral Punjab Technical University, Kapurthala</h4>
            <h4>2022 - 2026</h4>
          </Box>
        </Box>
        <Box className="box1Ex">
          <Box className="heading-row">
            <h3>Class 12th (ISc)</h3>
          </Box>
          <Box className="details-row">
            <h4>KKM College, Jamui</h4>
            <h4>76%</h4>
          </Box>
          <Box className="details-row">
            <h4>Bihar School Examination Board, Patna</h4>
            <h4>2019 - 2021</h4>
          </Box>
        </Box>
        <Box className="box1Ex">
          <Box className="heading-row">
            <h3>Class 10th (Matriculation)</h3>
          </Box>
          <Box className="details-row">
            <h4>Oxford Public School, Jamui</h4>
            <h4>66%</h4>
          </Box>
          <Box className="details-row">
            <h4>Central Board of Secondary Education, Delhi</h4>
            <h4>2019</h4>
          </Box>
        </Box>
      </BaseTabPanel>
      <BaseTabPanel value={2} className="tab-panel">
        <Box className="Award-box">
          <Box className="award-card">
            <img src={College1} alt="Award" className="award-image" />
            <Box className="award-content">
              <h4>🥇 1st place in logo designing Competition in College.</h4>
              <p>1st Place in logo designing Competition</p>
            </Box>
          </Box>
        </Box>
        <Box className="Award-box">
          <Box className="award-card">
            <img src={College2} alt="Award" className="award-image" />
            <Box className="award-content">
              <h4>🥈 2nd place at our college Techfest (#Prayog 2022)</h4>
              <p>
                Thrilled to have clinched 2nd place at our college Techfest (#Prayog 2022) during my first year. 🥈🥈 My project, a cutting-edge sensor-based home security system, not only impressed the judges but also showcased the power of innovation and dedication.💻
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="Award-box">
          <Box className="award-card">
            <img src={School} alt="Award" className="award-image" />
            <Box className="award-content">
              <h4>🥇 School Topper</h4>
              <p>Secured 1st position in school in 10th Class</p>
            </Box>
          </Box>
        </Box>
      </BaseTabPanel>
    </BaseTabs>
  );
}
