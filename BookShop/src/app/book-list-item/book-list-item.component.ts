import { Component, input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'a.wea5-book-list-item',
  standalone: true,
  imports: [],
  templateUrl: './book-list-item.component.html',
  styles: ``
})
export class BookListItemComponent {
  //book: Book = new Book(); // without signal
  book = input.required<Book>(); // with signal ( signal notation is required in html file)

}
