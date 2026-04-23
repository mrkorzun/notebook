import { refs } from './refs';

export function renderTask() {
  const data = JSON.parse(localStorage.getItem('tasks'));
  console.log(data);
  const markup = data
    .map(task => {
      return `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${task.taskNameValue}</h3>
      <p>${task.taskDescriptionValue}</p>
  </li>`;
    })
    .join('');
  refs.taskList.innerHTML = markup;
}
