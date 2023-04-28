import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.iterface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character [] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id?: string): void {
    // TODO: Emitir el ID del personaje
    if (!id) return;
    this.onDelete.emit(id);
  }

}
