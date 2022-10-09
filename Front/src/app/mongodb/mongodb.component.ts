import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {

  constructor() { }

  titulo = '¿Qué es MongoDB?';
  fraseInicial = 'Mongo es una palabra derivada de Humongous';

  ngOnInit(): void {
  }

}
