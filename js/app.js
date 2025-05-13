document.addEventListener('DOMContentLoaded', function() {
  // Элементы интерфейса
  const screens = {
    welcome: document.getElementById('welcomeScreen'),
    menu: document.getElementById('mainMenu'),
    about: document.getElementById('aboutSection'),
    social: document.getElementById('socialSection'),
    products: document.getElementById('productsSection')
  };

  // Инициализация
  function init() {
    // Показываем welcome-экран
    screens.welcome.classList.add('active');
    
    // Обработчики для основной навигации
    document.getElementById('enterButton').addEventListener('click', function() {
      switchScreen('welcome', 'menu');
    });
    
    // Обработчики кнопок меню
    document.querySelectorAll('.menu-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const target = this.dataset.section;
        switchScreen('menu', target);
      });
    });
    
    // Кнопки "Назад"
    document.querySelectorAll('.back-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const target = this.dataset.back;
        switchScreen(Object.keys(screens).find(key => screens[key].classList.contains('active')), target);
      });
    });
  }

  // Переключение экранов
  function switchScreen(from, to) {
    screens[from].classList.remove('active');
    screens[to].classList.add('active');
  }

  init();
});
