import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {Button} from "primeng/button";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardModule,
    PanelModule,
    Button
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  protected projects: any[] = [];

  async ngOnInit() {
    const response = await fetch("https://api.github.com/users/Chris-GM/repos");
    const json = await response.json();
    this.projects = (<any[]>json).map(element => {
      console.log(element)

      return {
        name: element.name,
        url: element.html_url,
        description: element.description
      }
    });

    console.log(this.projects)
  }

  openUrl(url: string) {
    open(url);
  }
}
