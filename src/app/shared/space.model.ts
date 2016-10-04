import { SpacesService } from './spaces.service';

export class Space {
  name: string;
  url: string;
  rawData: any;

  constructor(
      name: string,
      url: string,
      private spacesService: SpacesService) {
    this.name = name;
    this.url = url;
    this.spacesService.getSpace(this.url)
      .subscribe(rawData => this.rawData = rawData);
  }
}
