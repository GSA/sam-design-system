export enum ActionMenuMode {
  SHOWN,
  DISABLED,
  HIDDEN,
}

export interface TriggerTypeModel {
  type: string;
  shadow: boolean;
}

export interface ActionMenuActions {
  id: string;
  text: string;
  mode?: ActionMenuMode;
}

export interface ActionMenuModel {
  trigger: TriggerTypeModel;
  label?: string;
  isIconMenu?: boolean;
  actions: ActionMenuActions[];
}
