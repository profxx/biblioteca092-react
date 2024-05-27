import "./App.css";
import { Container } from "./styles";

import { LivroForm } from "./components/LivroForm";
import { LivroTable } from "./components/LivroTable";
import { useEffect, useState } from "react";

function App() {
  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [livros, setLivros] = useState([]);

  // UseEffect
  useEffect(() => {
    fetch(`http://localhost:8080/livro/listar`)
    .then(result => result.json)
    .then(convertedResult => setLivros(convertedResult))
  }, []);

  return (
    <Container>
      <LivroForm status={btnCadastrar}/>
      <LivroTable livroList={livros}/>
    </Container>
  );
}

export default App;
