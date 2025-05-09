import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits = ['Pomme', 'Banane', 'Orange', 'Mangue'];
  name = 'Dalel';
  isVisible = false;
  imageUrl = 'assets/sidibou.jpeg';
  showMessage() {
    console.log('Tu as cliqué sur le bouton !');
    alert('Tu as cliqué sur le bouton !');
  }

  count = 0;

  increment() {
    this.count++;
  }
  monStyle = {
    'color': 'blue',
    'font-size': '20px',
    'border': '1px solid black'
  };
  // isImportant = true;
  choixCouleur = 'rouge';

  isImportant = true;
  isError = false;
}
