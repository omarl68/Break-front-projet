import { Component, OnInit } from '@angular/core';
import { BoissonService } from 'src/app/services/boisson.service';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {

  boissonsList: any = []
  constructor(private boissonService : BoissonService) { }

  ngOnInit(): void {
    this.boissonService.getAllBoissons().subscribe({
      next: res => { this.boissonsList = res },
      error: err => { console.log(err); }
    }
    )
  }

}
