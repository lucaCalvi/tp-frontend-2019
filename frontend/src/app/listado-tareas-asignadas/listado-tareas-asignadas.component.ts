import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listado-tareas-asignadas',
  templateUrl: './listado-tareas-asignadas.component.html',
  styleUrls: ['./listado-tareas-asignadas.component.css']
})
export class ListadoTareasAsignadasComponent implements OnInit {

  tareas = null;
  usuario = null;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getTareas();
  }

  getTareas() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getTareas(id)
      .subscribe(res => {
        this.tareas = res;
        this.getUsuario();
      },
      err => {
        console.log('Error ', err);
      });
  }

  getUsuario() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(id)
      .subscribe(res => {
        this.usuario = res;
      },
      err => {
        console.log('Error ', err);
      });
  }

  goBack() {
    this.location.back();
  }

}
