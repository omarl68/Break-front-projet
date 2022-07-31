import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
import { NosCofesService } from 'src/app/services/nos-cofes.service';

@Component({
  selector: 'app-cofe-list',
  templateUrl: './cofe-list.component.html',
  styleUrls: ['./cofe-list.component.css']
})
export class CofeListComponent implements OnInit {

  baseUrl = BaseService.baseUrl;
  articleList: any[] = [];
  constructor(
    private articleService: NosCofesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.articleService.getAllCofes().subscribe({
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
    this.articleService.deleteCofes(id).subscribe({
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
