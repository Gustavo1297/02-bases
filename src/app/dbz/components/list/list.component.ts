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
  onDelete:EventEmitter<string>= new EventEmitter();

  onDeleteItem(id?:string):void{
    //TODO: Emitir el Id del personaje
    if (!id) return;
    console.log("Indice Elmento: "+id);
    this.onDelete.emit(id);

  }

}
