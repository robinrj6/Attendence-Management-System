import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddNewComponent } from './add-new/add-new.component';
import { MarkAttendenceComponent } from './mark-attendence/mark-attendence.component';
import { ListAllComponent } from './list-all/list-all.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AddNewComponent,
    MarkAttendenceComponent,
    ListAllComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "welcome", component:WelcomeComponent},
      {path: "addNew", component:AddNewComponent},
      {path: "markAtt", component:MarkAttendenceComponent},
      {path: "list", component:ListAllComponent},
      {path: '',redirectTo:"welcome", pathMatch:"full"}
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
