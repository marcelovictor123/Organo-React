import './ListaSuspenca.css'

const ListaSuspensa = (props) => {
    return (

        <div class="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa
