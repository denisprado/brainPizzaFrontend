import styled from "styled-components";
import { primary, secondary } from "../../constants/theme";
import { shade, lighten } from "polished";

export const Container = styled.div`
  padding: 2.4rem;
  background-color: white;
  border: 1px solid ${shade(0.25, secondary)};
  border-radius: 0.8rem;
  strong {
    display: block;
  }
  p {
    font-size: 2.4rem;
  }
  strong {
    font-size: 2.4rem;
  }
  ul {
    margin-top: 0.8rem;
    list-style: none;
    li {
      padding: 0.4rem;
      font-size: 1.6rem;
    }
  }
`;
