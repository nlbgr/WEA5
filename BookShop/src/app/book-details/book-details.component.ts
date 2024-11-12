import { Component, input, output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'wea5-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styles: ``
})
export class BookDetailsComponent {
  book = input.required<Book>();
  showListEvent = output<void>();

  showBookList() {
    this.showListEvent.emit();
  }
}
