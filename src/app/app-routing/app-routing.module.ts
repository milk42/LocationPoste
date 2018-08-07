import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UtilisateursComponent } from '../utilisateurs/utilisateurs.component';


// Définition des chemins d'accès pour <router-outlet>
const ROUTES: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'login',component: LoginComponent},
  {path: 'utilisateurs', component: UtilisateursComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
