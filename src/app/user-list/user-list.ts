import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  standalone: true, 
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit{
public users: any[] = [];
public headers: string[] = [];
public editingRow: number | null = null;

constructor(private _router:Router, private _userService: UserService, private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadUsers();
  }

  /* Function to load users data **/
  loadUsers() {
    this._userService.getUser().subscribe({
      next: (res) => {
        if (Array.isArray(res)) {
          this.users = [...res];
          
          if (this.users.length > 0) {
            this.headers = Object.keys(this.users[0]);
          } 
        } 
        this._cdr.detectChanges();
      },
    });
  }

  /* function to navigate to user details page **/
  getDetails(user: any) {
    this._router.navigate(['/details', user.id]);
  }

  /* Function to edit **/
  isEditable(index: number, event: Event) {
    event.stopPropagation();
    this.editingRow = index;
  }

  /* Function to save **/
  save(event: Event) {
    event.stopPropagation();
    this.editingRow = null;
  }
}