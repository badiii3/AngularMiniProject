import { Component, OnInit } from '@angular/core';
import { Camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-camions',
  templateUrl: './camions.component.html',
  
})

export class CamionsComponent implements OnInit {
  camions !: Camion[];
  constructor(private camionService: CamionService ,
    private router :Router) {
    //this.voitures = voitureService.listeVoitures();
    }

  ngOnInit(): void {
    this.camionService.listeCamions().subscribe(cm => {
      console.log(cm);
      this.camions  = cm;
      });
      
  }


  supprimerCamion(cm: Camion)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.camionService.supprimerCamion(cm.idCamion).subscribe(() => {
  console.log("camion supprimé");
  this.SuprimerCamionDuTableau(cm);

  });
  }

  SuprimerCamionDuTableau(cm : Camion) {
    this.camions.forEach((cur, index) => {
    if(cm.idCamion=== cur.idCamion) {
    this.camions.splice(index, 1);
    }
    });
    }

}