import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { SpacelistComponent } from './spacelist';
import { SpaceAPIService } from './space-api.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SpacelistComponent],
  providers: [HTTP_PROVIDERS, SpaceAPIService]
})
export class AppComponent {
  title = 'Space States';
  spaces = [];

  constructor(private SpaceAPI: SpaceAPIService) {
  }

  ngOnInit() {
    this.SpaceAPI.getSpaces()
      .subscribe((result) => { this.spaces = result; });
  }

}
