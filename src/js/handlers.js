import { saveTask } from './local-storage-api';

export function onHeaderOnSubmit(e) {
  e.preventDefault();

  const { taskName, taskDescription } = e.target.elements;

  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();

  if (!taskNameValue || !taskDescriptionValue) {
    console.warn('Одне з полів порожнє!');
    return;
  }
  const task = { taskNameValue, taskDescriptionValue };
  saveTask(task);
  e.target.reset();
}
