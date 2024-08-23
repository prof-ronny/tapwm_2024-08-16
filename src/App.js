import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos';
import axios from 'axios';
import { useEffect, useState } from 'react';




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
      <h1>Lista Produtos</h1>
      <ListaProdutos produtos={produtos}/>    

    </div>
  );
}

export default App;
