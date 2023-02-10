import { Component, OnInit } from '@angular/core';
import { ListSrvService } from 'src/app/services/list-srv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users?: any[];
  constructor(private listSrv: ListSrvService) {
    this.listSrv.getData().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {}
}
