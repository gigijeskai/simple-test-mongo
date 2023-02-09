import { Component, OnInit } from '@angular/core';
import { UsersSrvService } from 'src/app/services/users-srv.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private usersSrv: UsersSrvService) {}

  ngOnInit(): void {
    this.usersSrv.getUsers().subscribe((data) => {
      this.usersSrv.users = data;
    });
  }
}
