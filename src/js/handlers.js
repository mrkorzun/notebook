import { nanoid } from 'nanoid';
import { getTasks, saveTask } from './local-storage-api';
import { renderTask, renderTasks } from './render-tasks';

export const onHeaderFormSubmit = e => {
  e.preventDefault();
  const { taskName, taskDescription } = e.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();
  if (!taskNameValue || !taskDescriptionValue) {
    return;
  }
  const task = { id: nanoid(), taskNameValue, taskDescriptionValue };
  saveTask(task);
  renderTask(task);
  e.target.reset();
};

export const onTaskListItemClick = e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
};

export const initHomePage = () => {
  const tasks = getTasks();
  renderTasks(tasks);
};
