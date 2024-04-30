import { Character } from './../../interfaces/character.interface';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']

})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character);

    if ( this.character.name.length == 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
