/** Enums */
export enum HomeScreenActionsEnum {
  ToggleModal = 'TOGGLE_MODAL',
  CreateTask = 'CREATE_TASK',
  SelectTaskIndex = 'SELECT_TASK_INDEX',
  SetTaskStatus = 'SET_TASK_STATUS',
}
export enum TaskStepsEnum {
  Ready = 'Ready',
  InProgress = 'InProgress',
  Finished = 'Finished',
}

/** HomeScreen & demais */
export type ITask = {
  isSelected?: boolean;
  label: string;
  status?: TaskStepsEnum;
};
export type IHomeScreen = {
  isModalVisible: boolean;
  tasks: ITask[];
  selectedTaskIndex?: number;
};

/** Payloads */
export type IToggleModalPayload = Pick<IHomeScreen, 'isModalVisible'>;
export type ICreateTaskPayload = {
  task: ITask;
};
export type ISelectTaskIndexPayload = {
  selectedTaskIndex: number;
};
export type ISetTaskStatusPayload = {
  taskStatus: TaskStepsEnum;
};

/** Actions */
export type IToggleModalAction = {
  type: HomeScreenActionsEnum.ToggleModal;
  payload: IToggleModalPayload;
};
export type ICreateTaskAction = {
  type: HomeScreenActionsEnum.CreateTask;
  payload: ICreateTaskPayload;
};
export type ISelectTaskIndexAction = {
  type: HomeScreenActionsEnum.SelectTaskIndex;
  payload: ISelectTaskIndexPayload;
};
export type ISetTaskStatusAction = {
  type: HomeScreenActionsEnum.SetTaskStatus;
  payload: ISetTaskStatusPayload;
};

/** HomeScreen Actions */
export type IHomeScreenActions =
  | IToggleModalAction
  | ICreateTaskAction
  | ISelectTaskIndexAction
  | ISetTaskStatusAction;
