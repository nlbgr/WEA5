import { Injectable } from '@angular/core';
import { Book } from './book';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private books: Book[] = [];

  constructor(
    private http: HttpClient
  ) {}

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.server}/books`).pipe(
        map<any, Book[]>(res => res['books']),
        catchError(this.errorHandler)
    )
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.server}/book/${id}`).pipe(
      map<any, Book>(res => res['book']),
      catchError(this.errorHandler)
    )
  }
}
