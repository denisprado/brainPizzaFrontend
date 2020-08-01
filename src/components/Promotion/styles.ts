import styled from "styled-components";
import { primary, secondary } from "../../constants/theme";
import { shade, lighten } from "polished";

export const Container = styled.div`
  padding: 2.4rem;
  background-color: white;
  border-radius: 1rem;
  border: 2px dashed ${shade(0.45, secondary)};
  border-radius: 0.8rem;
  margin-top: 1.6rem;
  strong {
    display: block;
  }
  p {
    font-size: 2.4rem;
  }
`;
