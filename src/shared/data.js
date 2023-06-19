function Item({ image1, partner }) {
  return (
    <div
      className="mbd-item-body"
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="icon">{image1}</div>
      <div style={{ color: "white" }}>{partner}</div>
    </div>
  );
}

export default Item;
