import { Component, output } from '@angular/core';
import { Book } from '../shared/book';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { CommonModule } from '@angular/common';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'wea5-book-list',
  standalone: true,
  imports: [BookListItemComponent],
  templateUrl: './book-list.component.html',
  styles: ``
})
export class BookListComponent {
  books: Book[] = [];
  showDetailsEvent = output<Book>();

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.books = this.bookStoreService.getAll();
  }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
