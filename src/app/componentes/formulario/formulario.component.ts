import { ConsultaService } from '../../service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consultas } from '../../models/consultas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  cunsultaFrom: FormGroup;

  constructor(private ConsultaService: ConsultaService,
    private fb: FormBuilder,
    private router: Router
    ) {
      this.cunsultaFrom = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        whatsapp: ['', Validators.required],
        fecha_ingreso: ['', Validators.required],
        fecha_salida: ['', Validators.required],
        mensaje: ['', Validators.required]
      })
    }

    realizarConslta(){
      const Consulta: Consultas = {
        nombre: this.cunsultaFrom.get('nombre')?.value,
        email: this.cunsultaFrom.get('email')?.value,
        whatsapp: this.cunsultaFrom.get('whatsapp')?.value,
        fecha_ingreso: this.cunsultaFrom.get('fecha_ingreso')?.value,
        fecha_salida: this.cunsultaFrom.get('fecha_salida')?.value,
        mensaje: this.cunsultaFrom.get('mensaje')?.value
      }

      this.ConsultaService.guerdarConsulta(Consulta).subscribe({
        error: (e) =>{
          console.log(e);
          
        }
      })

      this.cunsultaFrom.reset()
      this.cunsultaFrom.reset()
    }
}
