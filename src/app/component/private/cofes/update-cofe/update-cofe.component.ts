import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
import { NosCofesService } from 'src/app/services/nos-cofes.service';

@Component({
  selector: 'app-update-cofe',
  templateUrl: './update-cofe.component.html',
  styleUrls: ['./update-cofe.component.css']
})
export class UpdateCofeComponent implements OnInit {


  myForm: FormGroup;
  user: any;
  userList: any[] = [];
  selectedFile: any;
  imageUrl = `${BaseService.baseUrl}/`;

  constructor(
    private fb: FormBuilder,
    private blogService: NosCofesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {
    let article = {
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(200),
      ]),
    };
    this.myForm = this.fb.group(article);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.blogService.getOneCofes(id).subscribe({
      next: (result) => {
        let article = result;
        this.myForm.patchValue({
          titre: article.titre,
          content: article.content,
        });
        this.imageUrl += article.image;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

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

  update() {
    let data = this.myForm.value;
    let id = this.route.snapshot.params?.['id'];
    let formData = new FormData();
    formData.append('titre', data.titre);
    formData.append('content', data.content);
    formData.append('picture', this.selectedFile);

    this.blogService.updateCofes(formData, id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success("l'article mise à jour avec succès ");
        this.router.navigate(['cofe-list']);
      },
      error: (error) => {
        this.toastr.error(error.error.message);
        console.log();
      },
    });
  }
}

