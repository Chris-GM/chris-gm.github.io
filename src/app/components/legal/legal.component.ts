import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [
    CardModule,
    DividerModule
  ],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {
  phoneNr = environment.phoneNr;
  email = environment.email;
}
