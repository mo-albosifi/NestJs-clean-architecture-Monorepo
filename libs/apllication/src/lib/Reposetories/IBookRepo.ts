import { Book } from './../../../../domain/src/lib/Entities/Book.entity';
export interface IBookRepo{
    getAllBook() : Promise<Book[]>
    getBookById(id: number) : Promise<Book>
    addBook(book : Book) : Promise<Book>
    addBooks(book : Book[]) : Promise<Book[]>
    editBook(book : Book , id?: number) : Promise<Book>
   
}