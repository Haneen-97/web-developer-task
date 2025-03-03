// function to add books
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
             // handle success
            alert(`book ${$("#title").val()} added successfully`)
            window.location.reload(); 
    
        }).catch(err => {
             // handle error
            console.log(err)
        
        })
    })
}

// function to view all books 
function getAllBooks(){
axios({
    url: 'https://61067a051f3487001743792a.mockapi.io/api/v1/Books',
    method: 'get',
  })
  
  .then((response) => {  
    // handle success  
    // condition to check if there is a data then show the table
    if(response.data.length>0){
        $('#table').append(`
        <thead >
        <tr>
         <th scope="col">#NO</th>
          <th scope="col">Title</th>
          <th scope="col">Subtitle</th>
          <th scope="col">Author</th>
          <th scope="col">Image</th>
        <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="bookList"></tbody>`)
      // loop through data array
        for (i in response.data) { 
            // function call to show data 
            bookListData(response.data[i])
        }
        // else if there is no data 
    }else{
        $('#table').append(`<h1 align="center">Nothing to show, please add a book</h1>`);
    }
  }) 
  .catch((error)=>{
       // handle error
      console.log(error)
  }) 
}
// function to show book info in a row
  function bookListData(book){
    $('#bookList').append(`
    <tr>
        <th scope='row'>${++i}</th>
        <td>${book.title}</td>
        <td>${book.subtitle}</td>
        <td>${book.author}</td>
        <td><img src="${book.image}" width="100" height="100"></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteBook(${book.id})">Delete</button></td> 
    </tr>
     `);
  }


// function to delete a book 
function deleteBook(id){
    axios({
        url: 'https://61067a051f3487001743792a.mockapi.io/api/v1/Books/'+id,
        method: 'delete',
      })
      .then((response) => {
           // handle success
         window.location.reload(); 
         alert(`book ${id} deleted successfully`)
      }) 
      .catch((error)=>{
           // handle error
          console.log(error)
      }) 
}

// function call
addBook()
getAllBooks()