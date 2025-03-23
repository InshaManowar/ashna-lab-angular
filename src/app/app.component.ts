import { Component } from '@angular/core';
import { UserListComponent } from './user/user-list/user-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, CommonModule]
})
export class AppComponent {
  title = 'User Management';
}
