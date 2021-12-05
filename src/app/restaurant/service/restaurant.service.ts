import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestaurant } from '../restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  API_URL:string = 'http://localhost:3000';
  constructor(private readonly httpClient: HttpClient) { }
  getRestaurants():Observable<IRestaurant[]>{
    return this.httpClient.get<IRestaurant[]>(`${this.API_URL}/restaurant`);
  }
  getRestaurantById(restaurantId:number):Observable<IRestaurant>{
    return this.httpClient.get<IRestaurant>(`${this.API_URL}/restaurant/${restaurantId}`);
  }
  createRestaurant(restaurant: IRestaurant):Observable<IRestaurant>{
    return this.httpClient.post<IRestaurant>(`${this.API_URL}/restaurant/create`,restaurant);
  }
  updateRestaurant(restaurantId:number, restaurant: IRestaurant):Observable<IRestaurant>{
    return this.httpClient.put<IRestaurant>(`${this.API_URL}/restaurant/update/${restaurantId}`,restaurant);
  }
  deleteRestaurant(restaurantId:number):Observable<IRestaurant>{
    return this.httpClient.delete<IRestaurant>(`${this.API_URL}/restaurant/delete?restaurantId=${restaurantId}`);
  }
}
