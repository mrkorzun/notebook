const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'));
};

export const saveTask = task => {
  const tasks = getTasks() || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const getTheme = () => {
  return localStorage.getItem('theme'); // || 'theme-dark'; // дефолтна тема
};

export const saveTheme = theme => {
  localStorage.setItem('theme', theme); // Просто записуємо рядок, JSON тут навіть не обов'язковий
};
