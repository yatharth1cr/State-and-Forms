import React from "react";

function Menu(props) {
  return (
    <>
      <ul className="flex wrap space-between">
        {props.allData.map((el) => (
          <li key={el.id} className="flex card">
            <div>
              <img src={el.img} alt={el.title} />
            </div>
            <div className="card-content">
              <div className="flex space-between">
                <h3>{el.title}</h3>
                <h4>${el.price}</h4>
              </div>
              <p>{el.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
