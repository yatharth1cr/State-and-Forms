import data from "../constant/data..json";

function Card(props) {
  return (
    <div className="flex wrap around">
      {data.map((font, index) => (
        <div key={index} className="card flex between column">
          <div>
            <div>
              <h3 className="bold">{font.name}</h3>
              <p>{font["font-family"]}</p>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontFamily: font["font-family"],
                fontSize: `${props.fontSize}px`,
                wordBreak: "break-word",
              }}
            >
              {props.text}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
