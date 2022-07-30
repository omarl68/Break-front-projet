import { Component, OnInit } from '@angular/core';
import { NosCofesService } from 'src/app/services/nos-cofes.service';

@Component({
  selector: 'app-nos-cofes',
  templateUrl: './nos-cofes.component.html',
  styleUrls: ['./nos-cofes.component.css']
})
export class NosCofesComponent implements OnInit {
  cofesList: any = []
  constructor(private cofeService : NosCofesService) { }

  ngOnInit(): void {
    this.cofeService.getAllCofes().subscribe({
      next: res => { this.cofesList = res },
      error: err => { console.log(err); }
    }
    )
  }
}
