import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {

  constructor() { }

  tituloPrincipal = '¿Qué es Express.js?';
  primerParrafo = 'Es un marco de aplicación web de código abierto para Node.js. Express se encarga de la parte back-end con la conexión a MongoDB.';
  cita = 'Es una infraestructura básica mínima extensible con innumerables complementos.';
  autorCita = 'TJ Holowaychuk';
  segundoParrafo = 'Debido a ese minimalismo, se encuentran paquetes de middleware compatibles para solucionar cualquier problema de desarrollo web.';
  tituloSucesos = 'Sucesos importantes';
  suceso2010 = 'En enero se comienza a desarrollar el proyecto Express.js para que en noviembre salga su primera version 1.0.0';
  suceso2014 = 'StrongLoop compra los derechos comerciales de Express.js. La comunidad se muestra inconforme ya que era un proyecto de código abierto.';
  suceso2015 = 'Douglas Wilson renuncia a Express.js debido al entorno empresarial privado. Debido a esto y para aliviar tensiones se decide pasar Express.js a la organización Node.js.';
  suceso2018 = 'En octubre se lanza la version 4.16.4 de Express.js';


  ventajaUno = 'Es personalizable y mantiene la estructura de las aplicaciones';
  ventajaDos = 'Desarrollo rapido de aplicaciones';
  ventajaTres = 'Manejo de solicitudes y notificaciones';
  ventajaCuatro = 'Gran Comunidad';
  ventajaCinco = 'Fácil de aprender';

  desventajaUno = 'Conocimiento en el manejo de los Middleware';
  desventajaDos = 'requiere más líneas de código';
  desventajaTres = 'Organización del código';


  ngOnInit(): void {
  }

}
