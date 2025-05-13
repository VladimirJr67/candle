document.addEventListener('DOMContentLoaded', function() {
  // Все элементы
  const screens = {
    welcome: document.getElementById('welcomeScreen'),
    menu: document.getElementById('mainMenu'),
    about: document.getElementById('aboutSection'),
    social: document.getElementById('socialSection'),
    products: document.getElementById('productsSection')
  };

  // Инициализация
  function init() {
    // Кнопка "Войти"
    document.getElementById('enterButton').addEventListener('click', function() {
      switchScreen('welcome', 'menu');
    });

    // Кнопки меню
    document.querySelectorAll('.menu-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        switchScreen('menu', this.dataset.section);
      });
    });

    // Кнопки "Назад"
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', function() {
        switchScreen(getCurrentScreen(), this.dataset.back);
      });
    });
  }

  // Переключение экранов
  function switchScreen(from, to) {
    screens[from].classList.remove('active');
    screens[to].classList.add('active');
  }

  // Получение текущего экрана
  function getCurrentScreen() {
    return Object.keys(screens).find(key => screens[key].classList.contains('active'));
  }

  // Запуск
  init();
});