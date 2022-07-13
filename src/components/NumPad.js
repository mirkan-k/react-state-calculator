export function NumPad(props) {
    return(
        <div className="panel">
            <p>{props.val}</p>
            <div className="numbers">
            <button onClick={props.addVal}>1</button>
            <button onClick={props.addVal}>2</button>
            <button onClick={props.addVal}>3</button>
            <button onClick={props.addVal}>4</button>
            <button onClick={props.addVal}>5</button>
            <button onClick={props.addVal}>6</button>
            <button onClick={props.addVal}>7</button>
            <button onClick={props.addVal}>8</button>
            <button onClick={props.addVal}>9</button>
            <button onClick={props.addVal}>0</button>
            <button onClick={props.addDecimal}>.</button>
            <button onClick={props.clearVal}>Clear</button>
            </div>
        </div>
    )
}