import React, { useEffect, useState } from "react";
import Combo from "../../components/Combo";
import Promotion from "../../components/Promotion";
import YourPizza from "../../components/YourPizza";
import { Container, Sidebar } from "./styles";
import api from "../../services/api";

interface Pages {
  id: number;
  title: string;
  path: string;
}

const Dough: React.FunctionComponent = () => {
  const [pages, setPages] = useState<Pages[]>([]);

  useEffect(() => {
    api
      .get("/pages")
      .then((response: { data: React.SetStateAction<Pages[]> }) => {
        setPages(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <Container>
      <Combo />
      <Sidebar>
        <YourPizza />
        <Promotion />
      </Sidebar>
    </Container>
  );
};

export default Dough;
