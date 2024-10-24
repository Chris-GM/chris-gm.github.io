import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {MenuItem, PrimeIcons} from "primeng/api";
import {AvatarModule} from "primeng/avatar";
import {MenubarModule} from "primeng/menubar";
import {DockModule} from "primeng/dock";
import {CardModule} from "primeng/card";
import {LogoComponent} from "./components/logo/logo.component";
import {WaveComponent} from "./components/wave/wave.component";
import {AboutComponent} from "./components/about/about.component";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    AvatarModule,
    MenubarModule,
    DockModule,
    CardModule,
    CardModule,
    LogoComponent,
    WaveComponent,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  items: MenuItem[] | undefined;
  dock_items: MenuItem[] | undefined | null;

  ngOnInit() {
    this.items = [
      {
        label: "about",
        route: '/about'
      },
      {
        label: "projects",
        route: '/projects'
      }
    ];
    this.dock_items = [
      {
        label: "Linked-in",
        icon: PrimeIcons.LINKEDIN,
        toUrl: environment.linkedInUrl,
        // style: {'font-size': '2.5rem'}
      },
      {
        label: "Github",
        icon: PrimeIcons.GITHUB,
        toUrl: environment.githubUrl,
        // style: {'font-size': '2.5rem'}
      },
    ];
  }

  openUrl(url: string) {
    open(url);
  }
}
