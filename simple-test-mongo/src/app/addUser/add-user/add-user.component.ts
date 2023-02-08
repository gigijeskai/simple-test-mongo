import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersSrvService } from 'src/app/services/users-srv.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('newUser') form!: NgForm;
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    // this.userSrv
    //   .addUser(this.form.value)
    //   .subscribe((user) => this.userSrv.users?.push(user));
    // return this.form.reset();
  }
}
