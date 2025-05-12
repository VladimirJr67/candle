// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// DOM элементы
const welcomeScreen = document.getElementById('welcomeScreen');
const mainMenu = document.getElementById('mainMenu');
const enterButton = document.getElementById('enterButton');
const menuButtons = document.querySelectorAll('.menu-button');
const contentSections = document.querySelectorAll('.content-section');

// Обработчик кнопки "Войти"
enterButton.addEventListener('click', () => {
  welcomeScreen.classList.remove('active');
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
    mainMenu.classList.add('active');
  }, 500);
});

// Обработчики кнопок меню
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = button.getAttribute('data-section');
    
    // Скрываем все секции
    contentSections.forEach(section => {
      section.classList.remove('active');
    });
    
    // Показываем нужную секцию
    document.getElementById(`${targetSection}Section`).classList.add('active');
  });
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  // Показываем приветственный экран
  setTimeout(() => {
    welcomeScreen.classList.add('active');
  }, 100);
});