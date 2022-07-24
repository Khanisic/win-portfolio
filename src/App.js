import { useState } from 'react';
import './App.css';
import ContactModal from './components/ContactModal';
import Icon from './components/Icon';
import Taskbar from './components/Taskbar';
import Windows from './components/Windows.js'
import computer from './Icons/Desktop/computer.png'
import about from './Icons/Desktop/about.png'
import skills from './Icons/Desktop/skills.png'
import bin from './Icons/Desktop/bin.png'
import blogs from './Icons/Desktop/blogs.png'
import brief from './Icons/Desktop/brief.png'
import chrome from './Icons/Desktop/chrome.png'
import documents from './Icons/Desktop/documents.png'
import downloads from './Icons/Desktop/downloads.png'
import github from './Icons/Desktop/github.png'
import linkedin from './Icons/Desktop/linkedin.png'
import qualification from './Icons/Desktop/qualification.png'
import resume from './Icons/Desktop/resume.png'
import Blogs from './components/Blogs';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  const [contactModal, setContactModal] = useState(false)
  const [windowsModal, setWindowsModal] = useState(false)
  const [blogsModal, setBlogsModal] = useState(false)
  const [portfolioModal, setPortfolioModal] = useState(false)
  const [skillsModal, setSkillsModal] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)

  console.log(windowsModal)
  return (
    <div  className='background-main'>
    <div className='desktop-icons flex flex-col flex-wrap justify-start items-baseline h-5/6 w-fit pl-3 pt-3'>
      <Icon img={computer} type='1' name='My computer' />
      <Icon img={bin} type='1' name='Recycle' />
      <Icon img={documents} type='1' name='Documents' />
      <Icon img={chrome} type='1' name='Chrome' />
      <Icon img={resume} type='1' name='Resume' />
      <Icon img={downloads} type='1' name='Downloads' />
      <Icon img={blogs} type='1' name='Blogs' />
      <Icon img={brief} type='1' name='Portfolio' />
      <Icon img={qualification} type='1' name='Qualification' />
      <Icon img={github} type='1' name='Github' />
      <Icon img={linkedin} type='1' name='LinkedIn' />
      <Icon img={about} type='1' name='About' />
      <Icon img={skills} type='1' name='Skills' />
    </div>
        {
          blogsModal && 
          <Blogs />
        }
        {
          portfolioModal && 
          <Portfolio/>
        }
        {
          skillsModal &&
          <Skills/>
        }
        {
          aboutModal &&
          <About/>
        }
        <Taskbar setContactModal={setContactModal} contactModal={contactModal} setWindowsModal={setWindowsModal} windowsModal={windowsModal}/>
        {
          contactModal && <ContactModal/>
        }
        {
          windowsModal && <Windows/>
        }
    </div>
  );
}

export default App;
