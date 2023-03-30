import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'https://localhost:3000/api';
  
  token: any;
  
  constructor (private http: HttpClient, private router: Router){}

  login(email: string, password: string){
    this.http.post (this.uri + '/authenticate', {email:email, password:password})
    .subscribe((resp : any) => {
      //Redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      //guardamos el token en localStorage 
      localStorage.setItem('auth_token', resp.token);
    })
  };  

  //Para cerrar sesion eliminams el token
  logout(){
    localStorage.removeItem('token');
  }
  
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null)

      }
}



