import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { UserContactDetailsComponent } from './user-contact-details/user-contact-details.component';
import { UserEmailsDetailsComponent } from './user-emails-details/user-emails-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserContactDetailsComponent,
    UserEmailsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'UserContactInformation',
        component: UserContactDetailsComponent
      },
      {
        path: "",
        redirectTo: "UserContactInformation",
        pathMatch: "full",
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
