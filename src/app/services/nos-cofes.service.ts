import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NosCofesService {

  private cofesUrl = `${BaseService.baseUrl}/cofes/`

  constructor(private http: HttpClient) { }

  getAllCofes() {
    return this.http.get<any>(this.cofesUrl);
  }

  getAllRelatedCofes(category: String) {
    return this.http.get<any>(this.cofesUrl);
  }

  getOneCofes(id: String) {
    return this.http.get<any>(this.cofesUrl + id)
  }

  deleteCofes(id: String) {
    return this.http.delete<any>(this.cofesUrl + id)
  }

  addCofes(cofe: any) {
    return this.http.post<any>(this.cofesUrl, cofe);
  }

  updateCofes(cofe: any, id:String) {
    return this.http.patch<any>(this.cofesUrl+id, cofe);
  }

}
