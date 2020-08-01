import React from "react";
import { FiCircle } from "react-icons/fi";
import { Container, Header, Item } from "./styles";

const Combo: React.FC = () => {
  return (
    <Container>
      {pages.map(page => (
        <>
          <Header>
            <h2>Escolha {page.title}</h2>
          </Header>
          <Item>
            <a href="#teste">
              <div>
                <strong>Natural</strong>
                <p>10,00</p>
              </div>
              <FiCircle size={24} />
            </a>
          </Item>
          <Item>
            <a href="#teste">
              <div>
                <strong>Natural</strong>
                <p>10,00</p>
              </div>
              <FiCircle size={24} />
            </a>
          </Item>
        </>
      ))}
    </Container>
  );
};

export default Combo;
