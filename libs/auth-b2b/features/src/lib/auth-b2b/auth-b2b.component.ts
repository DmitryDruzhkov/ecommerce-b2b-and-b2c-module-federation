import { Component, inject, OnInit, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent, ProfileService, ProfileType } from '@ecommerce-b2b-and-b2c/profile/features';

@Component({
  selector: 'ecommerce-b2b-and-b2c-auth-b2b',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './auth-b2b.component.html',
  styleUrls: ['./auth-b2b.component.scss'],
})
export class AuthB2bComponent implements OnInit {
  
  constructor(@SkipSelf() private profileService: ProfileService) {}

  public ngOnInit(): void {
    this.profileService.setProfile({
      name: 'Иванов Б2Б>',
      type: ProfileType.B2B
    })
  }
}
