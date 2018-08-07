import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur, Logement } from './modeles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private url="http://localhost:8080/"; // creation de la variable url

  constructor(private http: HttpClient) { }

  // -----------------API UTILISATEUR-----------------------------------------------------
  // Création d'un nouvel utilisateur
  createUtilisateur(utilisateur: Utilisateur):Observable<Utilisateur> {
    console.log("Api ok");
    return this.http.post<Utilisateur>(this.url+'utilisateur',utilisateur);
  }
  //Retourne la liste des utilisateurs
  listerUtilisateurs():Observable<Utilisateur[]> {
    console.log(this.url);
    return this.http.get<Utilisateur[]>(this.url+'utilisateurs') as Observable<Utilisateur[]>;
  }
  //Afficher le détail d'un utilisateur selon son Id
  afficherUtilisateur(utilisateur_id: number):Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.url+'utilisateur/' + utilisateur_id);
  }
  //Supprime un utilisateur en fonction de son Id
  supprimerUtilisateur(utilisateur_id: number): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(this.url+'/utilisateur/'+ utilisateur_id);
  }
  //Modifie un utilisateur en fonction de son Id
  editerUtilisateur(utilisateur: Utilisateur, utilisateur_id: number): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(this.url + 'utilisateur/'+ utilisateur_id, utilisateur);
  }

  // -----------------API LOGEMENT-----------------------------------------------------
  // Création d'un nouvel logement
  createLogement(logement: Logement):Observable<Logement> {
    console.log("Api ok");
    return this.http.post<Logement>(this.url+'logement',logement);
  }
  //Retourne la liste des logements
  listerLogements():Observable<Logement[]> {
    console.log(this.url);
    return this.http.get<Logement[]>(this.url+'logements') as Observable<Logement[]>;
  }
  //Afficher le détail d'un logement selon son Id
  afficherLogement(logement_id: number):Observable<Logement> {
    return this.http.get<Logement>(this.url+'logement/' + logement_id);
  }
  //Supprime un logement en fonction de son Id
  supprimerLogement(logement_id: number): Observable<Logement> {
    return this.http.delete<Logement>(this.url+'/logement/'+ logement_id);
  }
  //Modifie un logement en fonction de son Id
  editerLogement(logement: Logement, logement_id: number): Observable<Logement> {
    return this.http.put<Logement>(this.url + 'logement/'+ logement_id, logement);
  }
  
}
