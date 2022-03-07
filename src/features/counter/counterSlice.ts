import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICounterState {
  value: number
}

const initialState: ICounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit позволяет нам писать «мутирующую» логику в редьюсерах. Это
      // на самом деле не мутирует состояние, потому что использует библиотеку Immer,
      // который обнаруживает изменения в «состоянии черновика» и создает совершенно новое
      // неизменное состояние, основанное на этих изменениях
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
});

// Экшн-криэйторы генерируются для каждого кейса функции редюсера
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer