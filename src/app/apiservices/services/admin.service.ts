import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { User } from '../models/user';
import { ApiConfiguration } from '../api-configuration';


@Injectable({
  providedIn: 'root'
})
export class AdminService extends BaseService {

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);}

  getUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(`${this.rootUrl}/admin/utilisateurs`);
  }

  desactiveAccount(id:number):Observable<User>{
    return this.http.post<User>(`${this.rootUrl}/admin/blockUser/{id}`,id);
  }

  activeAccount(id:number):Observable<User>{
    return this.http.post<User>(`${this.rootUrl}/admin/unlock/{id}`,id);}
    
  getOneUser(id:number): Observable<User> {
    return this.http.get<User>(`${this.rootUrl}/admin/utilisateur/`+id)
  }

}
