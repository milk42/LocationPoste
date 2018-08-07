import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur, Logement } from '../modeles';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  utilisateurs = new Array<Utilisateur>();
  utilisateur = new Utilisateur();
  displayedColumns = ['nom', 'bureau'];
  dataSource;

  afficherId() {
    this.router.navigate(['/utilisateur', this.utilisateur.utilisateur_id]);
  }
  listerUtilisateurs() {
    this.router.navigate(['/utilisateurs', this.utilisateurs])
  }

  ngOnInit() {
    this.api.listerUtilisateurs().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
    });
  }

}
