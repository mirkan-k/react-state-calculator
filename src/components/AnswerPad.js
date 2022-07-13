export function AnswerPad(props) {
    return(
        <div className="panel answer">
            <p>{props.result}</p>
            <div>
                <button onClick={props.calcResult}>=</button>
                <button onClick={props.storeResult}>Store</button>
                <button onClick={props.recallStoredResult}>Recall</button>
                <button onClick={props.clearAll}>AC</button>
            </div>
        </div>
    )
}