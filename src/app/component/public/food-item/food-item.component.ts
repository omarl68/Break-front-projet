import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() title!: string
  @Input() content!: string
  @Input() image!: string
  baseUrl = `${BaseService.baseUrl}/`;
  constructor() { }

  ngOnInit(): void {
  }

}
