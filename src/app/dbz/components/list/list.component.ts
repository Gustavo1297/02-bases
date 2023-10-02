import { Character } from './../../interfaces/character.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[];

}
