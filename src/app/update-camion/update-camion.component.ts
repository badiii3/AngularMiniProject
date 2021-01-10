import { Component, OnInit } from '@angular/core';

import { CamionService } from '../services/camion.service';
import { Camion } from '../model/camion.model';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
selector: 'app-update-camion',
templateUrl: './update-camion.component.html',
styles: []
})
export class UpdateCamionComponent implements OnInit {
currentCamion = new Camion();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private camionService: CamionService) { }
  
  ngOnInit() {
    this.camionService.consulterCamion(this.activatedRoute.snapshot.params.id).
     subscribe( cm =>{ this.currentCamion = cm; } ) ;
    }


    updateCamion() {
      this.camionService.updateCamion(this.currentCamion).subscribe(cm => {
      this.router.navigate(['camions']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }

}