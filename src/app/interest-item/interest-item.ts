import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InterestTypeSelect } from '../interest-type-select/interest-type-select';
import { Interest } from '../interest-form/interest.interface';

@Component({
  selector: 'app-interest-item',
  imports: [FormsModule, InterestTypeSelect],
  templateUrl: './interest-item.html',
  styleUrl: './interest-item.css',
})
export class InterestItem {
  @Input({required: true}) interest!: Interest;
  @Output() remove = new EventEmitter<void>();
  @Output() updated = new EventEmitter<Interest>();

  idEditing = false;

  save() {
    this.idEditing = false;
    this.updated.emit(this.interest);
  }
}
