
import BarraMenu from "../../Componentes/BarraMenu";
import AtualizaProduto from "../../Componentes/AtualizaProduto";
import { useLocation } from "react-router";


export default function PaginaAtualizaProd(){
    const location = useLocation();
    const data = location.state; 
    return(
        <div>
            <BarraMenu />
            <AtualizaProduto produto={data}  />
        </div>
    )
}