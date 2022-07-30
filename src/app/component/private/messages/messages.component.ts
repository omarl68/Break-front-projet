import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messageList: any[] = [];
  constructor(
    private messageService: MessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.messageService.getAllMessages().subscribe({
      next: (result) => {
        this.messageList = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(id: String, index: number) {
    this.messageList.splice(index, 1);
    console.log(id);
    this.messageService.deleteMessage(id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success('le message est supprimée');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
