import React from "react";
import profile from "../../img/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClipboardList,
    faCloudDownloadAlt
} from "@fortawesome/free-solid-svg-icons";


function Profile() {
  return (
    <header className={"profile"}>
      <img
        id="profile-pic"
        src={profile}
        alt={"profile"}
      />
      <h1>
        {" "}
        Hi, I'm <span id="name">Haile Lagi</span> - chemical engineering
        student, programmer and web developer. Take a look around the awesome stuff I build.
          See anything you like, buy me coffee?
      </h1>
      <div className={"call-to-action"}>
        <button><FontAwesomeIcon icon={faCloudDownloadAlt} size="sm" /> download my resume</button>
        <button><FontAwesomeIcon icon={faClipboardList} size="sm" /> portfolio</button>
      </div>
    </header>
  );
}

export default Profile;
