import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PulseImageSpan } from './pulse-image.styles';

const PulseImage = ({ id, url, image, title }) => {
  const gatsbyImage = getImage(image);
  return (
      <PulseImageSpan key={id}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <GatsbyImage
            image={gatsbyImage}
            alt={title}
          />
        </a>
      </PulseImageSpan>
  )
};

export default PulseImage;
