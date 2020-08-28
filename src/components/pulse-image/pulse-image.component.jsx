import React from 'react';
import Img from "gatsby-image";
import { PulseImageSpan } from './pulse-image.styles';

const PulseImage = ({ id, title, url, image }) => {

  return (
      <PulseImageSpan key={id}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Img
            fluid={image.fluid}
            style={{maxHeight: "100%"}}
            imgStyle={{objectFit: "contain"}}
            alt={title}
          />
        </a>
      </PulseImageSpan>
  )
};

export default PulseImage;