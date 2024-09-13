import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CadastroProduto from './Componentes/CadastroProduto';  
import BarraMenu from './Componentes/BarraMenu';


function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(()=>{
    carregaProdutos();
  }, []);

  function carregaProdutos(){
    axios.get('https://app-api-tapwm.onrender.com/api/produtos')
    .then(res=>{
      setProdutos( res.data);
      //console.log(produtos);
    });
  }

  return (
    <div >
      <BarraMenu />
      <h1>Lista Produtos</h1>
      <ListaProdutos produtos={produtos} carregaProdutos={carregaProdutos}/>
      
    </div>
  );
}

export default App;
