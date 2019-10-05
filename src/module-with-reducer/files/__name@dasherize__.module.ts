// lib imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

// custom imports
import { MaterialModule } from '../material.module';
import { CanActivateConfigEdit } from '../core/service/config-edit-activate';
import { CanDeactivateGuard } from '../sandboxes/authentication/services/can-deactivate-guard.service';
import { <%= classify(name) %>HomeComponent } from './components/home-component/<%= dasherize(name) %>-home.component';
import { <%= classify(name) %>EditComponent } from './components/edit-component/<%= dasherize(name) %>-edit.component';
import { <%= classify(name) %>SandboxService } from './sandboxes/<%= dasherize(name) %>-sandbox.service';
import { <%= classify(name) %>Service } from './services/<%= dasherize(name) %>.service';
import { SharedModule } from '../shared/shared.module';
import { StoreState } from '../common/state';
import { reducer } from './reducers';

const routes: Routes = [
    {
        path: '', component: <%= classify(name) %>HomeComponent
    },
    {
        path: 'edit',
        component: <%= classify(name) %>EditComponent,
        canActivate: [CanActivateConfigEdit],
        canDeactivate: [CanDeactivateGuard]
    },
    {
        path: 'edit/:id',
        component: <%= classify(name) %>EditComponent,
        canActivate: [CanActivateConfigEdit],
        canDeactivate: [CanDeactivateGuard]
    }
  ];

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      MaterialModule,
      RouterModule.forChild(routes),
      StoreModule.forFeature('<%= dasherize(name) %>', reducer)
    ],
    declarations: [
      <%= classify(name) %>HomeComponent,
      <%= classify(name) %>EditComponent
    ],
    providers: [
      <%= classify(name) %>SandboxService,
      <%= classify(name) %>Service
    ]
  })
  export class <%= classify(name) %>Module { }