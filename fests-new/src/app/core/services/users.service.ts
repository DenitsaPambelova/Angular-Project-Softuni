import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_KEY, APP_SECRET, API_URL } from '../constants/api.constants';

import { UserModel } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private usersUrl : string = `${API_URL}user/${APP_KEY}`;

    constructor(private http : HttpClient) {  }

    getAll() : Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.usersUrl+'/');
    }
    
    getById(id : string) : Observable<UserModel> {
        return this.http.get<UserModel>(`${this.usersUrl}/${id}`);
    }
    
    edit(userData : UserModel) {
        return this.http.put<UserModel>(`${this.usersUrl}/${userData._id}`, userData);
    }
}
