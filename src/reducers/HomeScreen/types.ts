/** Enum */
export enum HomeScreenActionsEnum {
  ToggleModal = 'TOGGLE_MODAL',
  CreateTask = 'CREATE_TASK',
  SelectTaskIndex = 'SELECT_TASK_INDEX',
}

/** HomeScreen & demais */
export type ITask = {
  isSelected?: boolean;
  label: string;
  status?: 'READY' | 'IN_PROGRESS' | 'FINISHED';
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

/** HomeScreen Actions */
export type IHomeScreenActions = IToggleModalAction | ICreateTaskAction | ISelectTaskIndexAction;
