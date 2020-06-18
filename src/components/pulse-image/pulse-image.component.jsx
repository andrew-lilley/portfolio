import React from 'react';
import Img from "gatsby-image";
import { PulseImageSpan } from './pulse-image.styles';

const PulseImage = ({ edge, collection }) => {

  let collection_details = collection[edge.node.name];

  return (
      <PulseImageSpan key={edge.node.id}>
        <a href={collection_details.url} target="_blank" rel="noopener noreferrer">
          <Img
            fluid={edge.node.childImageSharp.fluid}
            style={{maxHeight: "100%"}}
            imgStyle={{objectFit: "contain"}}
            alt={collection_details.name}
          />
        </a>
      </PulseImageSpan>
  )
};

export default PulseImage;