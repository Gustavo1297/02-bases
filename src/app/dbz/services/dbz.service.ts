import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn:'root'
})
export class DbzService {
  public characters: Character[] = [
    {id:uuid(), name: 'Krilin', power: 1000 },
    { id:uuid(),name: 'Goku', power: 9500 },
    {id:uuid(), name: 'Yamcha', power: 1450 }];

    AddCharacter(character:Character):void{
      const newCharacter: Character={
        id:uuid(),
        ...character
      }
      this.characters.push(newCharacter);
    }

    deleteCharacterById(id:string):void{
      this.characters = this.characters.filter(c=> c.id !== id);
      console.log(this.characters);
    }
}
