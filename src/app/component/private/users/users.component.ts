import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: any[] = [];

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (result) => {
        this.userList = result;
      },
    });
  }
  delete(id: string, index: number) {
    this.userList.splice(index, 1);

    this.userService.deleteUser(id).subscribe({
      next: (result) => {
        this.toastr.success('user deleted successfuly');
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
