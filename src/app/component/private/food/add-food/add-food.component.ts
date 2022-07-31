import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/img/default.jpg';

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let food = {
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    };
    this.myForm = this.fb.group(food);
  }

  ngOnInit(): void {}

  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }
  get titre() {
    return this.myForm.get('titre');
  }
  get content() {
    return this.myForm.get('content');
  }

  add() {
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('titre', data.titre);
    formData.append('content', data.content);
    formData.append('picture', this.selectedFile);

    this.foodService.addFood(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success('food ajoutée avec succès');
        this.router.navigate(['/food']);
      },
      error: (error) => {
        this.toastr.error(error.message);
        console.log();
      },
    });
  }
}
