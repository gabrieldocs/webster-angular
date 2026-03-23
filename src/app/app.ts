import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Billboard } from './billboard/billboard';
// import { InterestForm } from './interest-form/interest-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  //styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webster');
}
