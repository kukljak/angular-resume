import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './components/content/contacts/contacts.component';
import { ContentComponent } from './components/content/content.component';
import { EducationComponent } from './components/content/education/education.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: '/angular-resume', component: ContentComponent
  },
  {
    path: "/angular-resume/contacts", component: ContactsComponent
  },
  {
    path: "/angular-resume/education", component: EducationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ContactsComponent,
    ContentComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "",
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
