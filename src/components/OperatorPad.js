export function Operators(props) {
    return(
        <div className="panel">
            <p>{props.operator}</p>
            <div className="numbers">
            <button onClick={props.updateOperator}>+</button>
            <button onClick={props.updateOperator}>-</button>
            <button onClick={props.updateOperator}>*</button>
            <button onClick={props.updateOperator}>/</button>
            </div>
        </div>
    )
  }