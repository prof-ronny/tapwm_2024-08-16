import Produto from "../Produto";


const ListaProdutos = ({ produtos, carregaProdutos }) => {
    return (
      <div> {produtos.map(
                (p)=> (<Produto valor={p} carregaProdutos={carregaProdutos}  ></Produto>) 
            )} 
      </div>
    );
}

export default ListaProdutos;