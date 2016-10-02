import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'spacelist',
  templateUrl: 'spacelist.component.html',
  styleUrls: ['spacelist.component.css']
})
export class SpacelistComponent implements OnInit {

  @Input() spaces;

  constructor() { }

  ngOnInit() {
  }

  listIt() {
    let name: string;
  }

}
