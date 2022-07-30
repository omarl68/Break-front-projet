import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodsList: any = []
  constructor(private foodService : FoodService) { }

  ngOnInit(): void {
    this.foodService.getAllFoods().subscribe({
      next: res => { this.foodsList = res },
      error: err => { console.log(err); }
    }
    )
  }

}
