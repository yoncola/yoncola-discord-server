async function saveReview(review) {
  // Этот код будет имитировать сохранение, но на самом деле
  // не будет работать на GitHub Pages без бэкенда
  console.log("Отзыв сохранен (в реальном приложении здесь был бы запрос к серверу):", review);
}

async function loadReviews() {
  // Здесь можно вручную добавить несколько тестовых отзывов
  const defaultReviews = [
    {
      author: "Пример пользователя",
      rating: 5,
      text: "Отличный сервер!",
      date: new Date().toLocaleDateString()
    }
  ];
  
  const container = document.getElementById('reviews-container');
  container.innerHTML = '';
  defaultReviews.forEach(review => addReviewToPage(review));
}