import {
  HomeScreenActionsEnum,
  ICreateTaskAction,
  ICreateTaskPayload,
  ISelectTaskIndexAction,
  ISelectTaskIndexPayload,
  IToggleModalAction,
  IToggleModalPayload,
} from './types';

function toggleModal(payload: IToggleModalPayload): IToggleModalAction {
  return {
    type: HomeScreenActionsEnum.ToggleModal,
    payload,
  };
}

function createTask(payload: ICreateTaskPayload): ICreateTaskAction {
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

export const HomeScreenActions = {
  toggleModal,
  createTask,
  selectTaskIndex,
};
