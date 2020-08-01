import React from "react";
import { Container } from "./styles";
import Button from "../Button";

const Promotion: React.FC = () => (
  <Container>
    <h1>Pizza do Dia: ganhe desconto!</h1>
    <p>
      Pedindo uma pizza <strong>Integral - Grande - Vegetariana</strong> você
      terá um desconto
    </p>
    <Button> Pedir pizza do dia</Button>
  </Container>
);

export default Promotion;
