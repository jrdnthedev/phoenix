import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: string;
  @Input() description: string;
  @Input() hometown: string;
  @Input() country: string;
  @Input() email: string;
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(1).subscribe(
      user => {
        this.user = user[0];
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.age = this.user.age;
        this.description = this.user.description;
        this.hometown = this.user.hometown;
        this.country = this.user.country;
        this.email = this.user.email;
      }
    );
  }
}
