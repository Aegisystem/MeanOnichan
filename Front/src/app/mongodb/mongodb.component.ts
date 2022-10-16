import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {

  constructor() { }

  titulo = '📄¿Qué es MongoDB?📄';
  fraseInicial = 'Mongo es una palabra derivada de Humongous';

  suceso2003 = 'problemas de escalabilidad con los sistemas de bases de datos tradicionales.';
  suceso2007 = 'Dwight Merriman, Eliot Horowitz y Kevin Ryan fundan 10gen para construir una PaaS.';
  sucesos2009: string[] = [
    'Febrero: MongoDB 1.0 con funciones básicas.', 
    'Diciembre: MongoDB 1.2 con procesamiento de datos a gran escala.'
  ];
  sucesos2012: string[] = [
    'Aumento de empleados y oficinas con soporte 24/7', 
    'MongoDB 2.2 con nueva colección de productos de suscripción'
  ];
  sucesos2013: string[] = [
    'cambio de nombre 10gen a MongoDB Inc.', 
    '250 empleados y 1000 clientes',
    'Marzo: MongoDB 2.4 con el motor V8 de Google',
    'Adquisición de WiredTiger'
  ];

  ngOnInit(): void {
  }

}
