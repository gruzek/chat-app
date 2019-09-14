import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { ChatterComponent } from './chatter/chatter.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loginUser', component: LoginUserComponent },
  { path: 'createRoom', component: CreateRoomComponent },
  { path: 'viewRoom', component: ViewRoomComponent },
  { path: 'chatter', component: ChatterComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
