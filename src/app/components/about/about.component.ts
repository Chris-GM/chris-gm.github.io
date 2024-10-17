import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {CardModule} from "primeng/card";
import {LogoComponent} from "../logo/logo.component";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        AvatarModule,
        CardModule,
        LogoComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  age = new Date(new Date().getTime() - new Date("2000-05-05T00:00").getTime()).getUTCFullYear() - 1970;

  async ngOnInit() {
    console.log("stuff");
    const stuff = await fetch("https://api.github.com/users/Chris-GM/repos");
    const s = await stuff.json();
    console.log(s);
  }
}
