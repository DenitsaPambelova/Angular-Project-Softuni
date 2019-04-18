import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_KEY, APP_SECRET, API_URL } from '../constants/api.constants';

import { CommentModel } from '../models/comment';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    private commentsUrl : string = `${API_URL}appdata/${APP_KEY}/comments`;

    constructor(private http : HttpClient) {  }
    


    getAllByUserId(userId : string) : Observable<CommentModel[]> {
        return this.http.get<CommentModel[]>(`${this.commentsUrl}?query={"userId":"${userId}"}`);
    }

    getLastThree() : Observable<CommentModel[]> {
        return this.http.get<CommentModel[]>(`${this.commentsUrl}?query={}&sort={"_kmd": -1}&limit=3`);
    }
    
    addComment(commentData : CommentModel) {
        return this.http.post<CommentModel>(`${this.commentsUrl}`, commentData);
    }
    
    delete(id : string) {
        return this.http.delete<CommentModel>(`${this.commentsUrl}/${id}`);
    }
    
    edit(commentData : CommentModel) {
        return this.http.put<CommentModel>(`${this.commentsUrl}/${commentData._id}`, commentData);
    }

     getAllForHotel(hotelId : string) : Observable<CommentModel[]> {
     return this.http.get<CommentModel[]>(`${this.commentsUrl}?query={"hotelId":"${hotelId}"}`);
     }
    
}

