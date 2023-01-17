import React from "react";
import Icon from "./Icon";
import chrome from "../Icons/chrome.png";
import folder from "../Icons/folderTaskbar.png";
import notes from "../Icons/notes.png";
import search from "../Icons/search.png";
import windows from "../Icons/windows.png";

function Taskbar({
  contactModal,
  setContactModal,
  windowsModal,
  setWindowsModal,
}) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  var time = date.getHours() + ":" + date.getMinutes();

  return (
    <div className="taskbar-outer z-10">
      <div
        onClick={() => {
          setWindowsModal(false);
          setContactModal(!contactModal);
        }}
        className="taskbar-contact"
      >
        <p>Contact</p>
      </div>
      <div className="taskbar-icons gap-2 sm:gap-1 flex justify-center items-center">
        <Icon
          onClick={() => {
            setWindowsModal(!windowsModal);
            setContactModal(false);
          }}
          img={windows}
          name="windows"
        />
        <Icon className="md:hidden block" img={search} name="search" />
        <Icon className="md:hidden block" img={folder} name="folder" />
        <Icon className="md:hidden block" img={notes} name="notes" />
        <Icon className="md:hidden block" img={chrome} name="chrome" />
      </div>
      <div className="taskbar-time">
        <p>{time}</p>
        <p>{currentDate}</p>
      </div>
    </div>
  );
}

export default Taskbar;
