// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// DOM элементы
const elements = {
  welcomeScreen: document.getElementById('welcomeScreen'),
  mainMenu: document.getElementById('mainMenu'),
  enterButton: document.getElementById('enterButton'),
  menuButtons: document.querySelectorAll('.menu-button'),
  contentSections: document.querySelectorAll('.content-section'),
  backButtons: document.querySelectorAll('.back-button')
};

// Показать элемент с анимацией
function showElement(element) {
  element.style.display = element === elements.welcomeScreen || element === elements.mainMenu ? 'flex' : 'block';
  setTimeout(() => {
    element.classList.add('active');
  }, 10);
}

// Скрыть элемент с анимацией
function hideElement(element, callback) {
  element.classList.remove('active');
  setTimeout(() => {
    if (!element.classList.contains('active')) {
      element.style.display = 'none';
    }
    if (callback) callback();
  }, 400);
}

// Инициализация приложения
function initApp() {
  // Сначала скрываем все элементы
  elements.contentSections.forEach(section => {
    section.style.display = 'none';
  });
  elements.mainMenu.style.display = 'none';
  
  // Показываем приветственный экран
  setTimeout(() => {
    showElement(elements.welcomeScreen);
  }, 100);
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Кнопка "Войти"
  elements.enterButton.addEventListener('click', () => {
    hideElement(elements.welcomeScreen, () => {
      showElement(elements.mainMenu);
    });
  });

  // Кнопки меню
  elements.menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSection = document.getElementById(`${button.dataset.section}Section`);
      hideElement(elements.mainMenu, () => {
        showElement(targetSection);
      });
    });
  });

  // Кнопки "Назад"
  elements.backButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentSection = button.closest('.content-section');
      hideElement(currentSection, () => {
        showElement(elements.mainMenu);
      });
    });
  });
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  setupEventListeners();
});
