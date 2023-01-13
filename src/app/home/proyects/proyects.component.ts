import { Component, OnInit } from '@angular/core';
import { ProyectsService } from './proyects.service';
import { Proyect } from './proyect';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit{

  proyects: Proyect[] = [];

  constructor(private proyectsService: ProyectsService){ }

  ngOnInit(): void {
    this.proyectsService.getAllProyects().subscribe((proyects) => {
      this.proyects = proyects;
    });
  }

}
