import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersSrvService } from 'src/app/services/users-srv.service';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('newUser') form!: NgForm;
  constructor(private usersSrv: UsersSrvService) {}

  ngOnInit(): void {}

  onSubmit() {}
}
