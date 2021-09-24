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

const routes: Routes = [
  {
    path: '', component: ContentComponent
  },
  {
    path: "contacts", component: ContactsComponent
  },
  {
    path: "education", component: EducationComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
