import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// import page
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PostComponent } from './pages/post/post.component';
import { SavedComponent } from './pages/saved/saved.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { CardComponent } from './components/card/card.component';
import { HomeSidebarComponent } from './components/home-sidebar/home-sidebar.component';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    NotificationComponent,
    PostComponent,
    SavedComponent,
    MessagesComponent,
    ProfileComponent,
    CardComponent,
    HomeSidebarComponent
	],
	imports: [
		BrowserModule,
    routes
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
