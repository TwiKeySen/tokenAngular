import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL : String = "http://localhost:8080/";

  constructor(private http : HttpClient) { }

  login(loginForm)  {   
    const body = new URLSearchParams();
          body.set('username', loginForm.username);
          body.set('password', loginForm.password);
          body.set('grant_type', 'password');
    
    const headers = new HttpHeaders({                     
                                        'Content-Type' : 'application/x-www-form-urlencoded', 
                                        'Authorization':'Basic ' + btoa('my-trusted-client' + ":" + 'secret')
                                    });

    return this.http.post(this.apiURL + "oauth/token" , body.toString(), { headers : headers});
  }
}