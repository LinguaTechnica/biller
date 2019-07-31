import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // TODO: Consider a separate component/service for messaging.
  errorMsg: string;
  successMsg: string;
  // TODO: Can the auth service manage this instead?
  currentUser: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  refreshUser() {}

}
