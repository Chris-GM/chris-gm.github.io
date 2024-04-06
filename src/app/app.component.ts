import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuItem, PrimeIcons} from "primeng/api";
import {AvatarModule} from "primeng/avatar";
import {MenubarModule} from "primeng/menubar";
import {DockModule} from "primeng/dock";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ToolbarModule, InputTextModule, SplitButtonModule, AvatarModule, MenubarModule, DockModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  items: MenuItem[] | undefined;
  dock_items: MenuItem[] | undefined | null;

  ngOnInit() {
    this.items = [{label: "about"}, {label: "projects"}];
    this.dock_items = [
      {
        label: "Linked-in",
        icon: PrimeIcons.LINKEDIN,
        toUrl: "https://www.linkedin.com/in/christean-g-860b3815a"
      },
      {
        label: "Github",
        icon: PrimeIcons.GITHUB,
        toUrl: "https://github.com/Chris-GM"
      },
    ];
  }

  some(url: string) {
    open(url)
  }
}
