import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

  private drinksUrl = `${BaseService.baseUrl}/drinks/`

  constructor(private http: HttpClient) { }

  getAllBoissons() {
    return this.http.get<any>(this.drinksUrl);
  }

  getOneBoisson(id: String) {
    return this.http.get<any>(this.drinksUrl + id)
  }

  deleteBoisson(id: String) {
    return this.http.delete<any>(this.drinksUrl + id)
  }

  addBoisson(boisson: any) {
    return this.http.post<any>(this.drinksUrl, boisson);
  }

  updateBoissons(boisson: any, id:String) {
    return this.http.patch<any>(this.drinksUrl+id, boisson);
  }
}
