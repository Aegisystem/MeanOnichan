import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Integrante } from '../models/integrante';

@Injectable({
  providedIn: 'root'
})

export class IntegranteService {

  URL_API = 'http://localhost:3001/api/integrantes'

  selectedIntegrante: Integrante = {
    ID_Integrante: 0,
    nombre: "",
    edad: 0,
    ocupaciones: [""],
    _id: ""
  };
  integrantes: Integrante[] = []

  constructor(private http: HttpClient) {}

  getIntegrantes() {
    return this.http.get<Integrante[]>(this.URL_API)
  }

  createIntegrante(integrante: Integrante)  {
    return this.http.post(this.URL_API, integrante)
  }

  updateIntegrante(integrante: Integrante)  {
    return this.http.put(`${this.URL_API}/${integrante._id}`, integrante)
  }

  deleteIntegrante(_id: string)  {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
