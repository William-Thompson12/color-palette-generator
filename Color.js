// props com from app.js render();
const Color = (props) => {
    let { color, toggle } = props;
    let { hex, isLocked } = color;
    return (
        <div style={{ backgroundColor: hex, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} className="w-100">
            {/* {displaying hex code} */}
            <h2>{hex}</h2>
            {/* toggle comes from props */};
            <button onClick={toggle} className={isLocked ? 'btn btn-primary' : 'btn btn-outline-dark'}>{isLocked ? 'UNLOCK' : 'LOCK'}</button>
        </div>
    )
}