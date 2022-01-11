import styled, {keyframes} from "styled-components";
import { pulse } from "react-animations";

const pulseAnimation = keyframes`${pulse}`;

export const PulseImageSpan = styled.span`
  display: block;
  height: 10rem;
  margin: 1rem 0 1rem 0;
  &:hover {
   animation: 1s ${pulseAnimation};
  }
  
  @media screen and (min-width: 800px) {
    height: 11rem;
  }
`;