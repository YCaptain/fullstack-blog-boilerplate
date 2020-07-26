import React from 'react';
import {config} from '@config/config.yml';

const Footer = () => {
  return (
    <div>
      &copy; 2020 - {new Date().getFullYear()} {config.author}
    </div>
  )
}

export default Footer;
