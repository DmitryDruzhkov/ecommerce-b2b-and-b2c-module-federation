import { Component, inject, OnInit, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent, ProfileService, ProfileType } from '@ecommerce-b2b-and-b2c/profile/features';

@Component({
  selector: 'ecommerce-b2b-and-b2c-auth-b2c',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './auth-b2c.component.html',
  styleUrls: ['./auth-b2c.component.scss'],
})
export class AuthB2cComponent implements OnInit {
  
  constructor(@SkipSelf() private profileService: ProfileService) {}

  public ngOnInit(): void {
    this.profileService.setProfile({
      name: 'Петров Б2С',
      type: ProfileType.B2C
    })
  }
}
