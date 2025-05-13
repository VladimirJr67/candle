document.addEventListener('DOMContentLoaded', function() {
  // Все элементы
  const screens = {
    welcome: document.getElementById('welcomeScreen'),
    menu: document.getElementById('mainMenu'),
    about: document.getElementById('aboutSection'),
    social: document.getElementById('socialSection'),
    products: document.getElementById('productsSection')
  };

  // История экранов
  let screenHistory = [];

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
    screenHistory = [];

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
        const previousScreen = screenHistory.pop();
        if (previousScreen && screens[previousScreen]) {
          switchScreen(currentScreen, previousScreen, false);
        } else {
          switchScreen(currentScreen, 'menu', false);
        }
      });
    });
  }

  // Переключение экранов
  function switchScreen(from, to, saveHistory = true) {
    if (!screens[from] || !screens[to]) {
      console.error('Попытка переключения на несуществующий экран');
      return;
    }
    if (saveHistory) {
      screenHistory.push(from);
    }
    screens[from].classList.remove('active');
    screens[to].classList.add('active');
  }

  // Получение текущего экрана
  function getCurrentScreen() {
    const currentScreen = Object.keys(screens).find(key => screens[key].classList.contains('active'));
    return currentScreen;
  }

  // Запуск
  init();
});