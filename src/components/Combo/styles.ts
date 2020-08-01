import styled from "styled-components";
import { shade, lighten } from "polished";
import { primary, secondary } from "../../constants/theme";

export const Container = styled.div`
  flex: 1;
  max-width: 48%;
  margin-right: 2.4rem;
`;

export const Header = styled.header`
  color: ${secondary};
  background-color: ${primary};
  padding: 2rem;
  border-radius: 0.8rem;
  margin-top: 1.6rem;
`;

export const Item = styled.div`
  background-color: ${lighten(0.05, secondary)};
  transition: background-color 0.2s;
  margin-top: 0.8rem;
  &:hover {
    background-color: ${shade(0.005, secondary)};
    color: black;
    svg {
      color: ${primary};
      background: white;
      border-radius: 50%;
    }
  }
  border: 1px solid ${shade(0.25, secondary)};
  border-radius: 0.8rem;
  a {
    padding: 2.4rem;
    color: ${shade(0.5, secondary)};
    display: block;
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover {
      color: ${primary};
    }
    div {
      strong {
        font-size: 1.6rem;
      }

      p {
        margin-top: 0.4rem;
        font-size: 1.6rem;
      }
    }
    svg {
      margin-left: auto;
    }
  }
`;
