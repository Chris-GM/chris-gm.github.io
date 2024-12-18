import {Component} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {CardModule} from "primeng/card";
import {LogoComponent} from "../logo/logo.component";
import {environment} from "../../../environments/environment";
import {Button} from "primeng/button";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AvatarModule,
    CardModule,
    LogoComponent,
    Button
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  age = new Date(new Date().getTime() - new Date("2000-05-05T00:00").getTime()).getUTCFullYear() - 1970;
  tugLink = environment.tugLink;
}
