function Spinner({ text }) {
  return (
    <div>
      <div className="spinner"></div>
      {text ? <p>{text}</p> : ""}
    </div>
  );
}

export default Spinner;
