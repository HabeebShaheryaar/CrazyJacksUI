import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-profile', component: MyProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    LoginComponent,
    RegisterComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
