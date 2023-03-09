import React from "react";
import Card from "./Card";
import ap1 from "../assets/ap1.jpg";
import cu from "../assets/cu.jpg";
import morra from "../assets/morra.jpg";
import "./cards.css";


const cards = [
  {
    id: 1,
    title: "Agradecimientos",
    image: ap1,
    url: "https://www.youtube.com/watch?v=1_DXtP0XyDw",
    btntext: "Video de fast",
  },
  {
    id: 2,
    title: "Pagina de la scul",
    image: cu,
    url: "http://jesus2023adw.atspace.cc/",
    btntext: "pagina para web",
    text: "pagina echa para pasar la pinche escuela gei casi no me enseñean de lo que quiero, esa wea no me detiene pero a la vez es buena ya que me ah enseñado las buenas practicas",
  },
  {
    id: 3,
    title: "another card",
    image: morra,
    url: "https://www.youtube.com/watch?v=pbMwTqkKSps",
    btntext: "Morra triste llora petroleo",
    text: "esta morra triste nunca deja de llorar petroleo, espero nunca se le acabe el petroleo ya que de ella los ricos se hacen mas ricos",
  },
];

function Cards() {
  return (
    
    <div className="container d-flex justify-content-center align-items-center h-100 mx-auto b-2">
      <div className="row">
        {cards.map((card) => (
          <div className="col-lg-4 col-md-6 m" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              url={card.url}
              btntext={card.btntext}
              text={card.text}
            />
          </div>
        ))}
      </div>
      
    </div>
     
  );
 
}

export default Cards;
