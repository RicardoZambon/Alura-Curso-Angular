import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura Pic';

  photos = [
    {
      url: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/E0F0/production/_112548575_gettyimages-492611032-1.jpg',
      description: 'Lion'
    },
    {
        url: 'https://i.pinimg.com/originals/10/67/e2/1067e2a775d2ccdd2bd2ff8b23c6d969.jpg',
        description: 'Lioness'
    }
  ];
}
