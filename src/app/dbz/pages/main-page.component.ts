import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Krilin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Yamcha', power: 1450 }];

    onNewCharacter(character:Character):void{
      this.characters.push(character);
      console.log('MainPage');
      console.log(character);
    }

    onDeleteCharacter(index:number):void{
      this.characters.splice(index,1);
    }

}
