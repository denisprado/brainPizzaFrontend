import React from "react";
import { Container } from "./styles";
import Button from "../Button";

const YourPizza: React.FC = () => (
  <Container>
    <h1>Sua Pizza</h1>
    <p>O que você pediu até agora:</p>
    <ul>
      <li>Massa: Natural</li>
      <li>Tamanho: Grande</li>
      <li>Recheio: Vegetariana</li>
    </ul>
    <strong>Você não ganhou descontos pois não pediu a pizza do dia</strong>
  </Container>
);

export default YourPizza;
