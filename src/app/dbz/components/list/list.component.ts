import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[];
  @Output()
  onDelete:EventEmitter<number>= new EventEmitter();

  onDeleteItem(index:number):void{
    //TODO: Emitir el Id del personaje
    console.log("Indice Elmento: "+index);
    this.onDelete.emit(index);

  }

}
