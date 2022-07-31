import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
import { BoissonService } from 'src/app/services/boisson.service';


@Component({
  selector: 'app-boisson-list',
  templateUrl: './boisson-list.component.html',
  styleUrls: ['./boisson-list.component.css']
})
export class BoissonListComponent implements OnInit {

  baseUrl = BaseService.baseUrl;
  articleList: any[] = [];
  constructor(
    private articleService: BoissonService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.articleService.getAllBoissons().subscribe({
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
    this.articleService.deleteBoisson(id).subscribe({
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
