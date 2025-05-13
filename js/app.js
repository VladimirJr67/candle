document.addEventListener('DOMContentLoaded', function() {
  // Все элементы
  const screens = {
    welcome: document.getElementById('welcomeScreen'),
    menu: document.getElementById('mainMenu'),
    about: document.getElementById('aboutSection'),
    social: document.getElementById('socialSection'),
    products: document.getElementById('productsSection')
  };

  // Проверка наличия всех необходимых элементов
  function validateElements() {
    for (const [key, element] of Object.entries(screens)) {
      if (!element) {
        console.error(`Элемент ${key} не найден на странице`);
        return false;
      }
    }
    return true;
  }

  // Инициализация
  function init() {
    if (!validateElements()) {
      console.error('Не удалось инициализировать приложение: отсутствуют необходимые элементы');
      return;
    }

    // Установка начального состояния
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens.welcome.classList.add('active');

    // Кнопка "Войти"
    const enterButton = document.getElementById('enterButton');
    if (enterButton) {
      enterButton.addEventListener('click', function() {
        switchScreen('welcome', 'menu');
      });
    }

    // Кнопки меню
    document.querySelectorAll('.menu-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const targetSection = this.dataset.section;
        if (screens[targetSection]) {
          switchScreen('menu', targetSection);
        }
      });
    });

    // Кнопки "Назад"
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', function() {
        const currentScreen = getCurrentScreen();
        const targetScreen = this.dataset.back;
        if (currentScreen && screens[targetScreen]) {
          switchScreen(currentScreen, targetScreen);
        }
      });
    });
  }

  // Переключение экранов
  function switchScreen(from, to) {
    if (!screens[from] || !screens[to]) {
      console.error('Попытка переключения на несуществующий экран');
      return;
    }
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