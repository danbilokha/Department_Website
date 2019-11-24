/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import {Link} from 'react-router-dom'

function Img(props) {
  return <img className={props.className} src={props.src} alt={props.alt} id={props.id} Link={props.Link}  />;
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  id:PropTypes.any
};

export default Img;
