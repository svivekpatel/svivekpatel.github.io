import React from 'react';
import navStyles from "./home.module.css";
import { AiFillDribbbleSquare, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Side = () => {
  return (
    <div>
        <div className={navStyles.mySidenav}>
  <a href="https://github.com/svivekpatel" target={'_blank'} className={navStyles.about}> <AiFillGithub/></a>
  <a href="https://www.linkedin.com/in/svivekpatel/" target={'_blank'} className={navStyles.blog}><AiFillLinkedin/></a>
  <a href="https://www.facebook.com/vivek.kurmi.18" target={'_blank'} className={navStyles.projects}><AiFillFacebook/></a>
  <a href="https://www.instagram.com/vivek_._kurmi/" target={'_blank'} className={navStyles.contact}><AiFillInstagram/></a>
</div>
    </div>
  )
}

export default Side;