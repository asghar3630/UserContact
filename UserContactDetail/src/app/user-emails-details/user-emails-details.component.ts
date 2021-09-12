import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-emails-details',
  templateUrl: './user-emails-details.component.html',
  styleUrls: ['./user-emails-details.component.css']
})
export class UserEmailsDetailsComponent implements OnInit {
  @Input() selectedUserDetail:any;

  constructor() { }

  ngOnInit(): void {
  }

}
