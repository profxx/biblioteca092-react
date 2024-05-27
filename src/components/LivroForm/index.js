import { LivroFormContainer } from "./styles"

export const LivroForm = ({status}) => {
    return (
      <LivroFormContainer>
        <input type="text" placeholder="Nome" className="form-control" />
        <input type="text" placeholder="Marca" className="form-control" />

        {
            status 
            ?
            <input type="button" value="Cadastrar" className="btn btn-primary" />
            :
            <div>
                <input type="button" value="Alterar" className="btn btn-warning" />
                <input type="button" value="Remover" className="btn btn-danger" />
                <input type="button" value="Cancelar" className="btn btn-secondary" />
            </div>
            
        }
        
        

      </LivroFormContainer>
    )
  }