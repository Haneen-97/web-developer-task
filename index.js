// TODO: Create a function to add books
addBook()
function addBook(){

    $("#form-n").on("submit", (e) => {
        e.preventDefault()
    axios({
        method: 'POST',
        url: 'https://61067a051f3487001743792a.mockapi.io/api/v1/Books',
        data: {
            title: $("#title").val(),
            subtitle: $("#subtitle").val(),
            author: $("#author").val(),
            image: $("#image").val(),
        }
      })
        .then( res => {
            alert(`book ${$("#title").val()} added successfully`)
            window.location.reload(); 
    
        }).catch(err => {
            console.log(err)
        
        })
    })
}

// TODO: Create a function to view all books 

//function call
getAllBooks();

function getAllBooks(){

axios({
    url: 'https://61067a051f3487001743792a.mockapi.io/api/v1/Books',
    method: 'get',
  })
  
  .then((response) => {    
    if(response.data){
        for (i in response.data) {  
            bookListData(response.data[i])
        }
    }else{
        $('#bookList').append(` 
      nothing to show`);
    }
  }) 
  .catch((error)=>{
     
      console.log(error)
  }) 
}
  function bookListData(book){
    $('#bookList').append(` 
    <tr>
        <th scope='row'>${++i}</th>
        <td>${book.title}</td>
        <td>${book.subtitle}</td>
        <td>${book.author}</td>
        <td><img src="${book.image}" width="100" height="100"></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteBook(${book.id})">Delete</button></td> 
    </tr>`);
  }

// TODO: Create a function to delete a book 
function deleteBook(id){
    axios({
        url: 'https://61067a051f3487001743792a.mockapi.io/api/v1/Books/'+id,
        method: 'delete',
      })
      .then((response) => {
         window.location.reload(); 
         alert(`book ${id} deleted successfully`)
       
      }) 
      .catch((error)=>{
          console.log(error)
      }) 
}