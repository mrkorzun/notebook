const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'));
};

export const saveTask = task => {
  const tasks = getTasks() || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
