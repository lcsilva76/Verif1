import './../css/Comp1.css'

export default (props) => {

    const result = props.valor + props.valor2

    const format = {color:'red', fontSize:'30px'}

    return(
        <>
            
            <p style={format}>Teste   {props.valor} {props.valor2} {result}</p>
            <p style={{color:'green', fontWeight:'bold'}}>Teste 2</p>

        </>
    )
}