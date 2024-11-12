import { Component, output } from '@angular/core';
import { Book } from '../shared/book';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { CommonModule } from '@angular/common';
import { BookStoreService } from '../shared/book-store.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'wea5-book-list',
  standalone: true,
  imports: [BookListItemComponent, RouterLink],
  templateUrl: './book-list.component.html',
  styles: ``
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.bookStoreService.getAll().subscribe(res => this.books = res);
  }
}
