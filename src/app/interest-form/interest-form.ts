import { Component } from '@angular/core';
import { Interest } from './interest.interface';
import { FormsModule } from '@angular/forms';
import { InterestTypeSelect } from '../interest-type-select/interest-type-select';

@Component({
  selector: 'app-interest-form',
  templateUrl: './interest-form.html',
  imports: [FormsModule, InterestTypeSelect],
  styleUrl: './interest-form.css',
})
export class InterestForm {
  filter: "all"|"hobby"|"work" = "all";
  newInterestType: "work" | "hobby" = "hobby";

  editingIndex: number | null = null;

  myInterests: Interest[] = [];

  startEdit(index: number) {
    this.editingIndex = index;
  }

  saveEdit() {
    this.editingIndex = null;
  }

  cancelEdit() {
    this.editingIndex = null;
  }

  get interests() {
    if(this.filter === 'all') {
      return this.myInterests;
    }

    return this.myInterests.filter(item => {
      if (this.filter === 'work') {
        return item.interest_type === 'work';
      } else if (this.filter === 'hobby') {
        return item.interest_type === 'hobby';
      }
      return true;
    })
  }
  
  addInterest(interest: Interest) {
    if(!interest.interest_name) return;
    
    this.myInterests.push(interest);
  }

  handleAdd(nameEl: HTMLInputElement) {
    
    this.addInterest({
      interest_name: nameEl.value,
      interest_type: this.newInterestType
    });

    nameEl.value = '';
  }

  get summary() {
    return {
      work_related: this.myInterests.reduce((acc, interest) => {
        return interest.interest_type === 'work' ? acc + 1 : acc;
      }, 0),
      hobby_related: this.myInterests.reduce((acc, interest) => {
        return interest.interest_type === 'hobby' ? acc + 1 : acc;
      }, 0),
    }
  }
}
