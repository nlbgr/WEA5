import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookListComponent } from "./book-list/book-list.component";
import { Book } from './shared/book';
import { BookDetailsComponent } from './book-details/book-details.component';

@Component({
  selector: 'wea5-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title: string = 'BookShop';
  listOn: boolean = true;
  detailsOn: boolean = false;
  book: Book = new Book();

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.listOn = false;
    this.detailsOn = true;
    this.book = book;
  }
}
