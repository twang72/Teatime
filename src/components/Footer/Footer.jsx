import React from "react";
import { FaMugHot } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <FaMugHot />
    <p>
      Share your tea time with us!
    </p>
    <p>
      Social: <BsInstagram /> <BsTwitter />
    </p>
    <hr />
    <p>Copyright <BiCopyright /> Teatime 2022</p>
  </footer>
);

export default Footer;
