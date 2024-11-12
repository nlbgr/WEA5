import { BookStoreService } from './../shared/book-store.service';
import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wea5-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styles: ``
})
export class BookDetailsComponent {
  //book: Book = new Book();
  book = signal(new Book())

  constructor(
    private route: ActivatedRoute,
    private BookStoreService: BookStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.BookStoreService.getBookById(params['id']).subscribe(res => this.book.set(res));
  }

  showBookList() {
    this.router.navigateByUrl('/books');
  }
}
