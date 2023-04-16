const Separator = ({text}:any) => {
    return (
    <div style={{ display: "flex", alignItems: "center" }}>
        <hr className="separator-line" style={{
            flexGrow: 1,
            height: "1px",
            backgroundColor: "black",
        }} />
        <div className="separator-text" style={{ margin: "0 1rem" }}>{text}</div>
        <hr className="separator-line" style={{
            flexGrow: 1,
            height: "1px",
            backgroundColor: "black",
        }} />
    </div>)
}
export default Separator;