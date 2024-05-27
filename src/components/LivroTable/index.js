import { LivroTableContainer } from "./styles"

export const LivroTable = ({livroList}) => {
  return (
    <LivroTableContainer className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Autor</th>
          <th>ISBN</th>
          <th>Data Publicação</th>
          <th>Quantidade</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {
          livroList.map((livro, index) => {
            return(
            <tr key={index}>
              <td>{livro.id}</td>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.isbn}</td>
              <td>{livro.dataPublicacao}</td>
              <td>{String(livro.quantidade)}</td>
              <td><button className="btn btn-success">Selecionar</button></td>
            </tr>
          )})
        }
      </tbody>
    </LivroTableContainer>
  )
}
