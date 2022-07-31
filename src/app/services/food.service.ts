import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foodsUrl = `${BaseService.baseUrl}/foods/`

  constructor(private http: HttpClient) { }

  getAllFoods() {
    return this.http.get<any>(this.foodsUrl);
  }

  getAllRelatedFoods(category: String) {
    return this.http.get<any>(this.foodsUrl);
  }

  getOneFood(id: String) {
    return this.http.get<any>(this.foodsUrl + id)
  }

  deleteFood(id: String) {
    return this.http.delete<any>(this.foodsUrl + id)
  }

  addFood(food: any) {
    return this.http.post<any>(this.foodsUrl, food);
  }

  updateFood(food: any, id:String) {
    return this.http.patch<any>(this.foodsUrl+id, food);
  }

}


