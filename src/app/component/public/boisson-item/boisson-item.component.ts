import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-boisson-item',
  templateUrl: './boisson-item.component.html',
  styleUrls: ['./boisson-item.component.css']
})
export class BoissonItemComponent implements OnInit {
  @Input() title!: string
  @Input() content!: string
  @Input() image!: string
  baseUrl = `${BaseService.baseUrl}/`;
  constructor() { }

  ngOnInit(): void {
  }

}
