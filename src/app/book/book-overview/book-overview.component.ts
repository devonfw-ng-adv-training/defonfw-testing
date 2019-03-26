import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Router} from '@angular/router';
import {SecurityService} from '../../shared/routing/security.service';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss'],
  providers: [SecurityService]
})
export class BookOverviewComponent implements OnInit {
  books$;
  lastClickedBook;

  constructor(private book: BookService, private router: Router) {
  }

  ngOnInit() {
    this.books$ = this.book.findAll();
  }

  showBook(book: Book): any {
    this.router.navigate(['/book', book.id]);
  }

  newBook(): any {
    this.router.navigate(['/book']);
  }

  setLastClicked(clickedBook: Book) {
    this.lastClickedBook = clickedBook;
    console.log(this.lastClickedBook);
  }

  clearBooks() {
    this.books$ = this.book.clearBooks();
  }
}
