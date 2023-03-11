import React from 'react'
import Card from './Card'
import rammus from '../assets/rammus.png'
import land from "../assets/land.jpg"
import './navbar.css'


const cards = [{
  id: 1, 
  image: rammus,
  title:'Bienvenida Rammus Like',
  url: '#',
  btntext: 'LLeva al mismo luagr laik',
  text:'Soy un intento de Trainner ya que ni a Junior llego, eso ? para nada es malo, cada dia intento ponerme retos y estoy en la busqueda de mejorar. que es un mal portafolio? y quien dijo que intento que sea bueno, lo sera, pero esto es solo el inicio , tengo 20 años y me gusta aprender, de poco a poquis pero asi tiene que ser'
}]
const cards2 = [{
  id: 1, 
  image: land,
  title:'En realidad no tengo Mucho que decir',
  url: '#',
  btntext: 'Lleva al mismo lugar',
  text:'Hago mimimi por aqui y por aya, en fin esta pagina es solo de apoyo las tecnologias que eh utiliado varian pero las principales son el uso de API (Esta la mas reciente), react (entendiendolo mas que nada), bootstrap, y los clasicos css, html y javascript. Igual utilizadon formatos para el manejo de los props como el json, fuentes por google fonts y la neta las imgs me las saque de internet, no busco empleo solo gente con la cual unirme a una comunidad de programadores y desarroladores, me gustaria vivir de esto ajsjgdjassdass y fin, si te di lastima como programador contactame y hasme el paro, nose recomiendame cosas o yoquese, lo que quiero es seguir aprendiendo para algun dia tener un portafolio decente, hasta aqui mi informe Rogelio'
}]
function TextCon() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row ">
        <div className='col-md-4'>
        {cards.map((card) => (
          <div className="col-lg-12 col-md-12 col-sm-8 m" key={card.id}>
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
        <div className='col-md-8'>
        {cards2.map((card) => (
          <div className="col-lg-12 col-md-6 m" key={card.id='2'}>
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
    </div>
  )
}

export default TextCon