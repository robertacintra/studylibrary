import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiUrl = "https://sheet.best/api/sheets/1cd489ac-d950-4f99-a68a-92b4f7fbf4e4";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUser(nome: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/nome/*${nome}*`);
  }

  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  postUsers(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  deleteUser(nome: string):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/nome/*${nome}*`);
  }

  updateUser(nome: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/nome/*${nome}*`, user, this.httpOptions);
  }
}