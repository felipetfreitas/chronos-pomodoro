import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null;
  interruptedDate: number | null;
  type: keyof TaskStateModel["config"]; // 'workTime' | 'shortBreakTime' | 'longBreakTime' assim pega todas as chaves do config, não precisa atualizar se adicionar mais tipos
};
