import React from "react";
import Card from "./Card";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [{
  id: 1, 
  title:'Agradecimientos',
  image: image1,
  url: 'https://www.youtube.com/watch?v=1_DXtP0XyDw',
  btntext: 'Video de fast'
},{
  id:2,
  title:'Pagina de la scul',
  image: image2,
  url: 'http://jesus2023adw.atspace.cc/',
  btntext: 'pagina para web',
  text: 'pagina echa para pasar la pinche escuela gei'
},{
id:3,
title:'Focaweb',
image: image3,
url: 'https://shapoweb.000webhostapp.com/',
btntext: 'focas bebe',
text:'algun dia la acabare'
},{
  id:4,
  title:'another card',
  image: image3,
  url: 'https://www.youtube.com/watch?v=pbMwTqkKSps',
  btntext: 'Morra triste llora petroleo',
  text: 'esta morra triste nunca deja de llorar petroleo, espero nunca se le acabe el petroleo ya que de ella los ricos se hacen mas ricos'

}];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row">
        {
          cards.map(card => (
            <div className="col-md-3" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} btntext={card.btntext} text={card.text}/>
          </div>  
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
