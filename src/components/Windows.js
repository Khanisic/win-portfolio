import React from "react";
import Icon from "./Icon";
import arsenal from "../Icons/Windows/arsenal.png";
import calendar from "../Icons/Windows/calendar.png";
import edge from "../Icons/Windows/edge.png";
import excel from "../Icons/Windows/excel.png";
import office from "../Icons/Windows/office.png";
import ppt from "../Icons/Windows/ppt.png";
import xbox from "../Icons/Windows/xbox.png";
import word from "../Icons/Windows/word.png";
import store from "../Icons/Windows/store.png";
import prime from "../Icons/Windows/prime.png";
import settings from "../Icons/Windows/settings.png";
import mail from "../Icons/Windows/mail.png";
import chrome from "../Icons/Windows/Bottom/chrome.png";
import about from "../Icons/Windows/Bottom/about.png";
import brief from "../Icons/Windows/Bottom/brief.png";
import resume from "../Icons/Windows/Bottom/resume.png";
import skills from "../Icons/Windows/Bottom/skills.png";
import notes from "../Icons/Windows/Bottom/notes.png";

function Windows({windowsModal, setWindowsModal, openModal}) {
  return (
    <div onClick={ () => { setWindowsModal(!windowsModal); }}  className="windows-main absolute flex flex-col bottom-16 items-center content-center justify-center w-full">
      <div onClick={e => {e.stopPropagation();}} className="windows-inner-top relative overflow-auto md:w-5/6 max-h-[600px] rounded-2xl ">
        <p className="text-white font-semibold pl-10 pt-9">Pinned</p>
        <div className="windows-inner-icons flex flex-col">
          <div className="windows-inner-icons-left flex pt-5 px-5 flex-wrap justify-center">
            <Icon img={arsenal} type="1" name="Arsenal" />
            <Icon img={xbox} type="1" name="Xbox" />
            <Icon img={mail} type="1" name="Mail" />
            <Icon img={excel} type="1" name="Excel" />
            <Icon img={edge} type="1" name="Edge" />
            <Icon img={calendar} type="1" name="Calendar" />
          </div>
          <div className="windows-inner-icons-right flex px-5  flex-wrap justify-center">
            <Icon img={settings} type="1" name="Settings" />
            <Icon img={office} type="1" name="Office" />
            <Icon img={word} type="1" name="Word" />
            <Icon img={ppt} type="1" name="Powerpoint" />
            <Icon img={prime} type="1" name="Prime" />
            <Icon img={store} type="1" name="Store" />
          </div>
        </div>
        <p className="text-white font-semibold pl-10 pt-9">Recommended</p>
        <div className="windows-recommened flex flex-wrap justify-between py-3 px-10">
          <div className="flex flex-col ">
            <Icon type="2" img={notes} onClick={() => { window.open("https://betterprogramming.pub/a-better-version-of-kickstarter-using-web3-0-solidity-8bbea829d2f0", '_blank') }}  name="Blog" subtxt="Kickstarter Dapp" />
            <Icon type="2" img={skills} name="Skills" subtxt="My skills" />
            <Icon  onClick={() => { window.open('https://docs.google.com/document/d/1mvF74krMGBAvVVulC4CnHl34nIUR-VdFM7AV7yK0BT4/edit', '_blank') }} type="2" img={resume} name="Pdf" subtxt="Resume.pdf" />
          </div>
          <div className="flex flex-col ">
            <Icon type="2" img={about} name="Note" subtxt="About me" />
            <Icon type="2" img={chrome} name="Project" subtxt="Crowdcoin" />
            <Icon type="2" img={brief} name="Personal" subtxt="Portfolio" />
          </div>
        </div>
      </div>
      <div className=" md:w-5/6 windows-inner-bottom flex justify-center py-2 flex-wrap items-center">
        <p className="text-white designed ">
          Designed and developed by Abdul Moid Khan Mohammed
        </p>
      </div>
    </div>
  );
}

export default Windows;
