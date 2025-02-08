import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistorial from "./info/CriptoHistorial"

const CriptoPage = () => {

    const params = useParams()    
    const cripto = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)
    
    return (
        <div className="cripto-page-container">
            { cripto && <CriptoInfo cripto={cripto} /> }
            { history && <CriptoHistorial history={history} />}            
        </div>
    )
}

export default CriptoPage