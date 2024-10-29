import { Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {LegalComponent} from "./components/legal/legal.component";

export const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent, title: 'About me'},
  {path: 'projects', component: ProjectsComponent, title: 'Projects'},
  {path: 'legal', component: LegalComponent, title: 'Legal Notice'},
  {path: '**', redirectTo: '/about'}
];
