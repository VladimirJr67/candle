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

// Функция для плавного перехода между экранами
function transitionTo(element) {
  element.style.display = 'block';
  // Даем время для применения display: block
  setTimeout(() => {
    element.classList.add('active');
  }, 50);
}

// Функция для плавного скрытия экрана
function transitionFrom(element) {
  element.classList.remove('active');
  // Ждем завершения анимации
  setTimeout(() => {
    element.style.display = 'none';
  }, 800); // Должно совпадать с --transition-slow в CSS
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
    
    // Скрываем главное меню
    transitionFrom(mainMenu);
    
    // Показываем нужную секцию
    const section = document.getElementById(`${targetSection}Section`);
    transitionTo(section);
  });
});

// Обработчики кнопок "Назад"
backButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = button.closest('.content-section');
    
    // Скрываем текущую секцию
    transitionFrom(targetSection);
    
    // Показываем главное меню
    transitionTo(mainMenu);
  });
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  // Показываем приветственный экран
  setTimeout(() => {
    welcomeScreen.classList.add('active');
  }, 100);
});
