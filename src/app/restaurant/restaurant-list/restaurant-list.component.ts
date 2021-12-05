import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../restaurant.interface';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  
  restaurantList:IRestaurant[] = [];
  constructor(private readonly restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      data => this.restaurantList = data     
    );
  }
  deleteRestaurant(id: number){
    this.restaurantService.deleteRestaurant(id).subscribe(
      res => {
        this.getRestaurants();
        console.log(res);
        
      },
      err => console.log(err)
      
    )
  }
}
