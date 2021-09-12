import { UserdataService } from './../userdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-contact-details',
  templateUrl: './user-contact-details.component.html',
  styleUrls: ['./user-contact-details.component.css'],
})
export class UserContactDetailsComponent implements OnInit {
  userData: any;
  selectedUser: any;
  constructor(public userDataService: UserdataService) {}

  ngOnInit(): void {
    this.userData = this.userDataService.userData;
    this.selectedUser = this.userData[0];
  }
  selectedUserChange(i: number) {
    console.log('Function Called', i);
    this.selectedUser = this.userData[i];
  }
}
