import axios from 'axios';
import '../../index.css';
import {MdDelete} from 'react-icons/md';
import {MdUpdate} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Produto = ({valor, carregaProdutos}) => {
    const navigate = useNavigate();

    
    return (
        <div className='card'>
            <h3 className='titulo'>{valor.nome}</h3>
            <p className='subtitulo'>Preço: {valor.preco}</p>
            <p className='descricao'>{valor.descricao}</p>
            <img src={valor.foto} alt='Imagem do Produto'
             className='imagem'></img>
            <MdDelete className='icone' onClick={()=>remover(valor.id)}></MdDelete>
            <MdUpdate className='icone' onClick={()=>atualizar(valor)}></MdUpdate>             
        </div>
    );

    function remover(id){
        let api = "https://app-api-tapwm.onrender.com/api/produtos"
        axios.delete(`${api}/${id}`)
            .then(()=>{
                carregaProdutos();
            })
        
        ;
    }

    function atualizar(valor){
        navigate('/AtualizaProduto/', {state: valor});    
    }
    

}


export default Produto;