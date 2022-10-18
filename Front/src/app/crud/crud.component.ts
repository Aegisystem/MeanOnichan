import { Component, OnInit } from '@angular/core';
import {IntegranteService} from '../services/integrante.service';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { Integrante } from '../models/integrante';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(public integranteService: IntegranteService) { }

  ngOnInit(): void {
    this.getIntegrantes()
  }

  resetForm(form: NgForm) {
    form.reset()
  }

  getIntegrantes() {
    this.integranteService.getIntegrantes().subscribe(
      res => {
        this.integranteService.integrantes = res
      },
      err => console.log(err) 
    );
  }

  addIntegrante(form: NgForm) {
    if(form.value._id)  {
      this.integranteService.updateIntegrante(form.value)
    }
    else  {
      this.integranteService.createIntegrante(form.value).subscribe(
        res => {
          this.getIntegrantes()
          form.reset()
        },
        err=>console.log(err)
      )
    }
  }

  deleteIntegrante(id: string, nombre: string)  {
    if(confirm(`Seguro que quieres asesinar a ${nombre}?`)) {
      this.integranteService.deleteIntegrante(id).subscribe(
        res => {
          this.getIntegrantes()
        },
        err => console.error(err)
      )
    }
  }

  editIntegrante(integrante: Integrante)  {
    this.integranteService.selectedIntegrante = integrante
  }
}
