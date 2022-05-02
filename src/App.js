import logo from './logo.svg';
import './App.css';

import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function App() {
  return (
    <div className="carouselLoader">
      <Carousel plugins={[
     'infinite',
    {
      resolve: autoplayPlugin,
      options: {
        interval: 6000,
      }
    },
  ]}   
  animationSpeed={2000}>
    <div>
    <h2 className="title">Mientras se generas tu reporte te queremos contar que <b>SMTM y Genes son partes de MyDNA.</b> </h2>
       <h3 className="subtitle"><b>Genes es el programa digital que facilitará tu transición laboral.</b></h3><br/><br/>
       <img width="20%" src="https://www.mydna.life/en-us/wp-content/uploads/sites/3/2020/04/myDNA-Logo.-blue_whitepace.png" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
       <img width="20%" src="https://www.mydna.life/en-us/wp-content/uploads/sites/3/2020/04/myDNA-Logo.-blue_whitepace.png" /><br/><br/><br/>
        <div>
       <img width="50%" className="imageCarousel" src="https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"/>
       <div className="textCarousel">
       <h3 >A através de nuestra plataforma y de sesiones personalizadas, te apoyamos a encontrar tu nuevo empleo más rápido.</h3>
       <button>Conocer Genes</button>
       </div>
       </div>
    </div>
    <div><h1>llllll</h1></div>
  </Carousel>
    </div>
  );
}

export default App;
