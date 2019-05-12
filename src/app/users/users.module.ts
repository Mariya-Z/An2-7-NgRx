import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { UsersEffects, usersReducer } from './../core/+store';



import { SharedModule } from './../shared/shared.module';
import { UsersServicesModule } from './users-services.module';

import {
  UsersRoutingModule,
  usersRouterComponents
} from './users-routing.module';
import { UserComponent } from './components';
import { UsersAPIProvider } from './users.config';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    FormsModule,
    UsersRoutingModule,
    UsersServicesModule,
  ],
  providers: [UsersAPIProvider],
  declarations: [usersRouterComponents, UserComponent]
})
export class UsersModule {}
