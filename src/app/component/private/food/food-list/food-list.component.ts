import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
import { FoodService } from 'src/app/services/food.service';
import * as moment from 'moment';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  baseUrl = BaseService.baseUrl;
  articleList: any[] = [];
  constructor(
    private articleService: FoodService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.articleService.getAllFoods().subscribe({
      next: (result) => {
        this.articleList = result;
        console.log(this.articleList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(id: string, index: number) {
    this.articleList.splice(index, 1);
    this.articleService.deleteFood(id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success("l'article est supprimée");
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  moment(x: Date) {
    return moment(x).fromNow();
  }
}
