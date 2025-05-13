// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// DOM элементы
const welcomeScreen = document.getElementById('welcomeScreen');
const mainMenu = document.getElementById('mainMenu');
const enterButton = document.getElementById('enterButton');
const menuButtons = document.querySelectorAll('.menu-button');
const contentSections = document.querySelectorAll('.content-section');
const backButtons = document.querySelectorAll('.back-button');

// Оптимизированная функция перехода
function transitionTo(element) {
  element.style.display = 'flex'; // Используем flex вместо block для корректного центрирования
  element.style.opacity = '0'; // Сбрасываем opacity перед анимацией
  
  // Даем время для применения стилей
  requestAnimationFrame(() => {
    element.classList.add('active');
  });
}

// Оптимизированная функция скрытия
function transitionFrom(element) {
  element.classList.remove('active');
  
  // Ждем завершения анимации
  setTimeout(() => {
    if (!element.classList.contains('active')) {
      element.style.display = 'none';
    }
  }, 400); // Сократил время до 400ms (совпадает с CSS)
}

// Обработчик кнопки "Войти"
enterButton.addEventListener('click', () => {
  transitionFrom(welcomeScreen);
  transitionTo(mainMenu);
});

// Обработчики кнопок меню
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = button.getAttribute('data-section');
    transitionFrom(mainMenu);
    
    const section = document.getElementById(`${targetSection}Section`);
    transitionTo(section);
  });
});

// Обработчики кнопок "Назад"
backButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = button.closest('.content-section');
    transitionFrom(targetSection);
    transitionTo(mainMenu);
  });
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  // Показываем приветственный экран с небольшой задержкой
  setTimeout(() => {
    welcomeScreen.style.display = 'flex';
    requestAnimationFrame(() => {
      welcomeScreen.classList.add('active');
    });
  }, 100);
});
