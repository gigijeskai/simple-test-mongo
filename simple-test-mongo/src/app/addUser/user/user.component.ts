import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild('newAnnouncement') form!: NgForm;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('ciao');
  }
}
