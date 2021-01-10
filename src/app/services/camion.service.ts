import { Injectable } from '@angular/core';
import { Camion } from '../model/camion.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class CamionService {
  apiURL: string = 'http://localhost:8072/camions/api/';
  camions !: Camion[];
  
 


  constructor(private http : HttpClient) { 
    /*this.voitures = [
      {idVoiture : 1, marque : "Kia", matricule:"123 4578TN",prix :70.600, dateVente
       : new Date("01/12/2019")},
       {idVoiture : 2, marque : "X five", matricule:"122 78578TN",prix :100.600, dateVente
       : new Date("01/12/2020")},
       {idVoiture : 3, marque : "Range Rover", matricule:"124 8978TN",prix :300.600, dateVente
       : new Date01/01/2021")}
       ];*/
  }

  listeCamions(): Observable<Camion[]>{
    return this.http.get<Camion[]>(this.apiURL);
    }

    ajouterCamion( cm: Camion):Observable<Camion>{
      return this.http.post<Camion>(this.apiURL, cm, httpOptions);
      }
      


      supprimerCamion(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
  
        consulterCamion(id: number): Observable<Camion> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Camion>(url);
          }
          
  
    trierCamions(){
      this.camions = this.camions.sort((n1,n2) => {
      if (n1.idCamion > n2.idCamion) {
      return 1;
      }
      if (n1.idCamion < n2.idCamion) {
      return -1;
      }
      return 0;
      });
      }



      updateCamion(cm :Camion) : Observable<Camion>
      {
      return this.http.put<Camion>(this.apiURL, cm, httpOptions);
      }

}
