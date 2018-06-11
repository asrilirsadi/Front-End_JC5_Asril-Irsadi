import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

import { UncontrolledCarousel } from 'reactstrap';

// <img src="./../images/Audi Q5.jpg" style={{height: 800}} className="img-responsive" alt />
//  <img src="./../images/toyotaCHRmerah.jpg" style={{width: '100%', height: 800}} className="img-responsive" alt />
//  <img src="./../images/fordFocus2018.jpg" style={{height: 800}} className="img-responsive" alt />

const items = 
[
  {
    src: './../images/Audi Q5.jpg',
    altText: 'Audi Q5',
    caption: 'Audi Q5',
    header: 'Audi Q5'
  },
  
  {
    src: './../images/toyotaCHRmerah.jpg',
    altText: 'Toyota CHR',
    caption: 'Toyota CHR',
    header: 'Toyota CHR'
  },
  
  {
    src: './../images/fordFocus2018.jpg',
    altText: 'Ford Focus',
    caption: 'Ford Focus',
    header: 'Ford Focus'
  }
];

const CarouselHome = () => <UncontrolledCarousel items={items} />;

export default CarouselHome;