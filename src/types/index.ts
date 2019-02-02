export enum CounterStatus {
  Initial = 'INITIAL',
  Loading = 'LOADING',
  Active = 'ACTIVE',
  Error = 'ERROR',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Completed = 'COMPLETED'
}

export interface StoreCounterState {
  counterValue: number;
  maxValue: number;
  counterStatus: CounterStatus;
}

export interface StoreTimerState {
  pendingTime: number;
}

export type StorePartialSates = StoreCounterState | StoreTimerState;

export interface StoreState {
  counterState: StoreCounterState;
  timerState: StoreTimerState;
}
