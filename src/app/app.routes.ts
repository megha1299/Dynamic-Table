import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserDetailpage } from './user-detailpage/user-detailpage';

export const routes: Routes = [
    {path:'users', component: UserList},
    {path:'details/:id', component: UserDetailpage},
    { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' }
];
