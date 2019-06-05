import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit {

  categories = [{id: 'bebidas', alt: 'first slide', photo: 'Bebidas.jpg', title: 'Bebidas'},
    {id: 'desayunos', alt: 'second slide', photo: 'Desayunos.jpg', title: 'Desayunos'},
    {id: 'almuerzos', alt: 'third slide', photo: 'Almuerzos.jpg', title: 'Almuerzos'},
    {id: 'vinos', alt: 'fourth slide', photo: 'Vinos.jpg', title: 'Vinos'}];

  constructor() { }

  ngOnInit() {
  }
}
