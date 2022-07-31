import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-cofe-item',
  templateUrl: './cofe-item.component.html',
  styleUrls: ['./cofe-item.component.css']
})
export class CofeItemComponent implements OnInit {

  @Input() title!: string
  @Input() content!: string
  @Input() image!: string
  baseUrl = `${BaseService.baseUrl}/`;
  constructor() { }

  ngOnInit(): void {
  }

}
