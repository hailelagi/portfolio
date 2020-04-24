import React from "react";
import profile from "../../img/profile.jpg";

function Profile() {
  return (
    <header className={"profile"}>
      <img
        id="profile-pic"
        src={profile}
        width={150}
        height={150}
        alt={"profile"}
      />
      <h1>
        {" "}
        Hi, I'm <span id="name">Haile Lagi</span> - chemical engineering
        student, programmer and something clever or something. Cool tag bro.
          Check me out. Hoorah.
      </h1>
      <div className={"call-to-action"}>
        <button>download my resume</button>
        <button>portfolio</button>
      </div>
    </header>
  );
}

export default Profile;
