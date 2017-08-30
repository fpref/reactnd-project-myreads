This is the MyReads project (udacity React nanodegree). The main page shows 3 shelves for books. Books on these shelves are in user's libraray. User can move books between shelves using a control element (each book has such element). Search page shows all the books meeting the query criteria, books already in user's library and new books. The books that are already in library show the corresponding value of shelf("currently reading", "want to read", "read"), new books show status "none". All books in search page allow to change the shelf. For "old" books just the shelf will be changed, for new books - the book will be added to a library with chosen shelf. State of books and shelves is consistent between Main application page and Search page.

## Installation and launch instructions
1. clone repo into local folder
2. go to this folder
3. run in terminal: npm install
4. run in terminal: npm start


## Notes
Some search queries give results where books don't have cover images ("b", "l", "v" query terms), for them standard "no-cover" image is shown. Some books don't have an author, for them authors are not displayed at all.





