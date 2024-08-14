const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
];

function getTheTitles(books)
{
    let titles = [];
    books.forEach(book => {
        titles.push(book.title);
    });  
    console.log(titles);
    return titles;  
}  

getTheTitles(books);