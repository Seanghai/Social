import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

// import page
import { HomeComponent } from './pages/home/home.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PostComponent } from './pages/post/post.component';
import { SavedComponent } from './pages/saved/saved.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const router: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'post', component: PostComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/page_not_found', pathMatch: 'full' },
  { path: 'page_not_found', component: PageNotFoundComponent }
 ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
