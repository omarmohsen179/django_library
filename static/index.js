document.getElementById('borrowForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulate adding a book to the list
  var bookTitle = document.getElementById('bookTitle').value;
  var borrowerName = document.getElementById('borrowerName').value;
  var borrowDate = document.getElementById('borrowDate').value;
  
  var listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.innerHTML = `
    <strong>${bookTitle}</strong> - Borrowed by ${borrowerName} on ${borrowDate}
    <button onclick="returnBook(this)" class="btn btn-sm btn-success float-end">Return</button>
  `;
  
  document.getElementById('booksList').appendChild(listItem);
  
  // Reset the form
  document.getElementById('borrowForm').reset();
});

function returnBook(button) {
  // Simulate returning a book
  button.parentElement.remove();
}
