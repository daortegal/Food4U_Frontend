import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Router, ActivatedRoute } from "@angular/router";
import { IRestaurant } from '../restaurant.interface';


@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {


  restaurant:IRestaurant = {
    name: '',
    address: '',
    telephone: 0,
    description: '',
    link: '',
    category: ''
  }
  edit:boolean = false;
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly router:Router,
    private readonly activatedRoute:ActivatedRoute

    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    

    if(params['id'] != undefined){
      this.restaurantService.getRestaurantById(params['id'])
      .subscribe(
        res => {
          this.restaurant = res;
          this.edit = true;
        }
      );
    }
  }

  createRestaurant(){
    this.restaurantService.createRestaurant(this.restaurant).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['restaurant/list']);        
      },
      err => console.log(err)    
    );
    console.log(this.restaurant);    
  }
  updateRestaurant(){
    this.restaurantService.updateRestaurant(this.restaurant._id!,this.restaurant).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['restaurant/list']);      
      },
      err => console.log(err)    
    );
    console.log(this.restaurant);    
  }
}
