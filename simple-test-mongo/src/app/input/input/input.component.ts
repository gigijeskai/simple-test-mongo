import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { ListSrvService } from 'src/app/services/list-srv.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  user: User = {
    name: '',
    lastname: '',
    email: '',
  };
  constructor(private listSrv: ListSrvService) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    this.listSrv.addUser(this.user);
    f.resetForm();
  }
}
