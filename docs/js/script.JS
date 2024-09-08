// Функция для загрузки содержимого страницы
function loadPage(page) {
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading the page:', error);
      document.getElementById('content').innerHTML = '<p>Error loading the page. Please try again later.</p>';
    });
}
