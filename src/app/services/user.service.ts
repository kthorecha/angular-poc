import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    // this.getAllUsers().subscribe(data => {
    //   console.log(data);
    // });
   }

  getAllUsers(): Observable<any> {
    return this.http.get('assets/users.json');
  }
}
