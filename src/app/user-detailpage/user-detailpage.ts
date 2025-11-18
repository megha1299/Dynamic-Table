import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../service/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detailpage',
  imports: [CommonModule],
  templateUrl: './user-detailpage.html',
  styleUrl: './user-detailpage.scss',
})
export class UserDetailpage {
  public user: any = null;
  public userId: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const userId = this._route.snapshot.params['id'];
    
    if (userId) {
      this.loadUserDetails(userId);
    }
  }

  /* Function to load user detail **/
  loadUserDetails(userId: string) {
    this.user = null;
    this._cdr.detectChanges();

    this._userService.getUser().subscribe({
      next: (users) => {
        const foundUser = users.find(user => user.id === userId);
        
        if (foundUser) {
          this.user = foundUser;
        }
        this._cdr.detectChanges();
      },
    });
  }

  /* Function to route back **/
  goBack() {
    this._router.navigate(['./users']);
  }
}
