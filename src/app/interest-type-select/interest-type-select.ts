import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-type-select',
  imports: [FormsModule],
  templateUrl: './interest-type-select.html',
  styleUrl: './interest-type-select.css',
})
export class InterestTypeSelect {
  @Input() value: 'hobby' | 'work' | 'all'= 'hobby';
  @Input() showAll = false;
  @Output() valueChange = new EventEmitter<'hobby'|'work'|'all'>();
}
