import { useState, useRef, useEffect } from 'react';
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
import black from './background/black.jpg'
import blue from './background/blue.jpg'
import red from './background/red.jpg'
import green from './background/green.jpg'
import lush from './background/lush.jpg'
import white from './background/white.png'

function App() {

  const images = [blue, black, green, lush, red, white]
  const [contactModal, setContactModal] = useState(false)
  const [windowsModal, setWindowsModal] = useState(false)
  const [blogsModal, setBlogsModal] = useState(false)
  const [portfolioModal, setPortfolioModal] = useState(false)
  const [skillsModal, setSkillsModal] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)
  const [currentBgImg, setCurrentBgImg] = useState(blue)
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert('Hey guys, this website is still under development. Check back in a few days for it to finish. Thanks :)')
  // }, [])
  
  useEffect(() => {
    const changeImg = setInterval(() => {
      setCurrentBgImg(images[counter])
      if (counter === 5) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }

    }, 3000);
    return () => clearInterval(changeImg);
  }, [counter]);

  const openModal = (type) => {
    if (type === 'blogs') {
      setBlogsModal(!blogsModal);
      setSkillsModal(false);
      setPortfolioModal(false);
      setAboutModal(false)
    }
    if (type === 'skills') {
      setSkillsModal(!skillsModal);
      setBlogsModal(false);
      setPortfolioModal(false);
      setAboutModal(false)
    }
    if (type === 'port') {
      setPortfolioModal(!portfolioModal);
      setBlogsModal(false);
      setSkillsModal(false);
      setAboutModal(false)
    }
    if (type === 'about') {
      setAboutModal(!aboutModal)
      setPortfolioModal(false);
      setBlogsModal(false);
      setSkillsModal(false);
    }
  }

  const mainRef = useRef(null)

  return (
    <div ref={mainRef} className='background-main overflow-hidden' >
      <img
        className="background-main"
        rel="preload"
        src={currentBgImg}
        alt=''
      />
      <div className='desktop-icons flex md:flex-row flex-col flex-wrap md:justify-center justify-start md:items-center items-baseline h-5/6 w-fit pl-3 pt-3'>
        <Icon img={computer} type='1' name='My computer' />
        <Icon img={bin} type='1' name='Recycle' />
        <Icon img={documents} type='1' name='Documents' />
        <Icon onClick={() => { window.open('https://www.google.com/', '_blank'); }} img={chrome} type='1' name='Chrome' />
        <Icon onClick={() => { window.open('https://docs.google.com/document/d/1mvF74krMGBAvVVulC4CnHl34nIUR-VdFM7AV7yK0BT4/edit', '_blank') }} img={resume} type='1' name='Resume' />
        <Icon img={downloads} type='1' name='Downloads' />
        <Icon onClick={() => { openModal('blogs') }} img={blogs} type='1' name='Blogs' />
        <Icon onClick={() => { openModal('port') }} img={brief} type='1' name='Portfolio' />
        <Icon img={qualification} type='1' name='Qualification' />
        <Icon onClick={() => { window.open('https://github.com/Khanisic', '_blank') }} img={github} type='1' name='Github' />
        <Icon onClick={() => { window.open('https://www.linkedin.com/in/abdulmoidkhan/', '_blank') }} img={linkedin} type='1' name='LinkedIn' />
        <Icon onClick={() => { openModal('about') }} img={about} type='1' name='About' />
        <Icon onClick={() => { openModal('skills') }} img={skills} type='1' name='Skills' />
      </div>
      {
        blogsModal &&
        <Blogs setBlogsModal={setBlogsModal} blogsModal={blogsModal} />
      }
      {
        portfolioModal &&
        <Portfolio portfolioModal={portfolioModal} setPortfolioModal={setPortfolioModal} />
      }
      {
        skillsModal &&
        <Skills setSkillsModal={setSkillsModal} skillsModal={skillsModal} />
      }
      {
        aboutModal &&
        <About setAboutModal={setAboutModal} aboutModal={aboutModal} />
      }
      <Taskbar setContactModal={setContactModal} contactModal={contactModal} setWindowsModal={setWindowsModal} windowsModal={windowsModal} />
      {
        contactModal && <ContactModal  setContactModal={setContactModal} contactModal={contactModal} />
      }
      {
        windowsModal && <Windows openModal={openModal} setWindowsModal={setWindowsModal} windowsModal={windowsModal}/>
      }
    </div>
  );
}

export default App;
