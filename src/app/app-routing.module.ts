import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantFormComponent } from './restaurant/restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'restaurant/list',
    component: RestaurantListComponent
  },
  {
    path:'restaurant/create',
    component: RestaurantFormComponent
  },
  {
    path:'restaurant/edit/:id',
    component: RestaurantFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
