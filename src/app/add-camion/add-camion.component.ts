import { Component, OnInit } from '@angular/core';
import { Camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-add-camion',
  templateUrl: './add-camion.component.html'
})
export class AddCamionComponent implements OnInit {
  newCamion = new Camion();

  message !:string;


  constructor(private camionService: CamionService,
    private router :Router) { }

  ngOnInit(): void {
  }


  addCamion(){
    this.camionService.ajouterCamion(this.newCamion).subscribe(cm => {
    console.log(cm);
    });
    this.router.navigate(['camions']).then(() => {
      window.location.reload();
      });

}}
