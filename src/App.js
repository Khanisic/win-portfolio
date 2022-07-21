import { useState } from 'react';
import './App.css';
import ContactModal from './components/ContactModal';
import Taskbar from './components/Taskbar';
import Windows from './components/Windows.js'

function App() {
  const [contactModal, setContactModal] = useState(false)
  const [windowsModal, setWindowsModal] = useState(false)
  console.log(windowsModal)
  return (
    <div  className='background-main'>
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
