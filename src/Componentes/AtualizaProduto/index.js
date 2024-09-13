import axios from "axios";

export default function AtualizaProduto({carregaProdutos, produto}) {
    return (
        <div className='card'>
            <h3 className='titulo'>Cadastro de Produto</h3>
            <form>
                <label>Nome:</label>
                <input type='text' id='nome' name='nome' value={produto.nome}>                
                </input>
                <br/>
                <label>Preço:</label>
                <input type='text' id='preco' name='preco' value={produto.preco}>
                </input>
                <br/>
                <label>Foto:</label>
                <input type='text' id='foto' name='foto' value={produto.foto}>
                </input>
                <br/>
                <label>Descrição:</label>
                <input type='text' id='descricao' name='descricao' value={produto.descricao}>
                </input>
                <br/>
                <button type='button' 
                onClick={atualizarProduto}>Adicionar</button>
            </form>
        </div>
    );

    function atualizarProduto(){
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const foto = document.getElementById('foto').value;
        const descricao = document.getElementById('descricao').value;
        const prod = {nome, preco, foto, descricao};
        console.log(prod);
        axios.put(
`https://app-api-tapwm.onrender.com/api/produtos/${produto.id}`, 
            prod)
        .then(()=>{
            carregaProdutos();
        });
    }
}