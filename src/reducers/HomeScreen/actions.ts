import {
  HomeScreenActionsEnum,
  ICreateTaskAction,
  ICreateTaskPayload,
  ISelectTaskIndexAction,
  ISelectTaskIndexPayload,
  ISetTaskStatusAction,
  ISetTaskStatusPayload,
  IToggleModalAction,
  IToggleModalPayload,
  TaskStepsEnum,
} from './types';

function toggleModal(payload: IToggleModalPayload): IToggleModalAction {
  return {
    type: HomeScreenActionsEnum.ToggleModal,
    payload,
  };
}

function createTask(payload: ICreateTaskPayload): ICreateTaskAction {
  payload.task.isSelected = false;
  payload.task.status = TaskStepsEnum.Ready;
  return {
    type: HomeScreenActionsEnum.CreateTask,
    payload,
  };
}

function selectTaskIndex(payload: ISelectTaskIndexPayload): ISelectTaskIndexAction {
  return {
    type: HomeScreenActionsEnum.SelectTaskIndex,
    payload,
  };
}

function setTaskStatus(payload: ISetTaskStatusPayload): ISetTaskStatusAction {
  return {
    type: HomeScreenActionsEnum.SetTaskStatus,
    payload,
  };
}

/** chamandas dos enumns */
function taskStart() {
  return setTaskStatus({ taskStatus: TaskStepsEnum.InProgress });
}
function taskFinished() {
  return setTaskStatus({ taskStatus: TaskStepsEnum.Finished });
}
function taskStop() {
  return setTaskStatus({ taskStatus: TaskStepsEnum.Ready });
}

export const HomeScreenActions = {
  toggleModal,
  createTask,
  selectTaskIndex,
  setTaskStatus,
  taskStart,
  taskFinished,
  taskStop,
};
