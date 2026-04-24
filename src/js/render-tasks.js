import { refs } from './refs';

//  Отрисовывает всё и сразу!
// export function renderTask() {
//   const data = JSON.parse(localStorage.getItem('tasks'));
//   console.log(data);
//   const markup = data
//     .map(task => {
//       return `<li class="task-list-item">
//       <button class="task-list-item-btn">Delete</button>
//       <h3>${task.taskNameValue}</h3>
//       <p>${task.taskDescriptionValue}</p>
//   </li>`;
//     })
//     .join('');
//   refs.taskList.innerHTML = markup;
// }

export const renderTasks = tasks => {
  const markup = tasks
    .map(
      ({
        id,
        taskNameValue,
        taskDescriptionValue,
      }) => `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${taskNameValue}</h3>
      <p>${taskDescriptionValue}</p>
  </li>`
    )
    .join('');
  refs.taskList.innerHTML = markup;
};

export const renderTask = ({ id, taskNameValue, taskDescriptionValue }) => {
  refs.taskList.insertAdjacentHTML(
    'beforeend',
    `<li class="task-list-item" >
      <button class="task-list-item-btn data-id=${id}">Delete</button>
      <h3>${taskNameValue}</h3>
      <p>${taskDescriptionValue}</p>
  </li>`
  );
};
