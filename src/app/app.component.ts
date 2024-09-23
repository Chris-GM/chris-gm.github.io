import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {MenuItem, PrimeIcons} from "primeng/api";
import {AvatarModule} from "primeng/avatar";
import {MenubarModule} from "primeng/menubar";
import {DockModule} from "primeng/dock";
import {CardModule} from "primeng/card";
import {LogoComponent} from "./components/logo/logo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    AvatarModule,
    MenubarModule,
    DockModule,
    CardModule,
    CardModule,
    LogoComponent
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
      },
      {
        label: "projects",
      }
    ];
    this.dock_items = [
      {
        label: "Linked-in",
        icon: PrimeIcons.LINKEDIN,
        toUrl: "https://www.linkedin.com/in/christean-g-860b3815a",
        style: {'font-size': '2.5rem'}
      },
      {
        label: "Github",
        icon: PrimeIcons.GITHUB,
        toUrl: "https://github.com/Chris-GM",
        style: {'font-size': '2.5rem'}
      },
    ];
  }

  some(url: string) {
    open(url)
  }
}
