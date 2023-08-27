import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: APIInitState = {
  exercises: [],
  equipments: {},
  targets: {},
  bodyParts: {},
  exerciseBy: {
    equipment: undefined,
    bodyPart: undefined,
    id: undefined,
  },
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    initApiCall: (state, action: PayloadAction<Exercise[]>) => {
      state.exercises = action.payload;

      const equipments: { [key: string]: Exercise[] } = {},
        targets: { [key: string]: Exercise[] } = {},
        bodyParts: { [key: string]: Exercise[] } = {};

      action.payload.forEach((exercise) => {
        if (Object.hasOwnProperty.call(equipments, exercise.equipment)) {
          equipments[exercise.equipment] = [
            ...equipments[exercise.equipment],
            exercise,
          ];
        } else {
          equipments[exercise.equipment] = [exercise];
        }

        if (Object.hasOwnProperty.call(targets, exercise.target)) {
          targets[exercise.target] = [...targets[exercise.target], exercise];
        } else {
          targets[exercise.target] = [exercise];
        }

        if (Object.hasOwnProperty.call(bodyParts, exercise.bodyPart)) {
          bodyParts[exercise.bodyPart] = [
            ...bodyParts[exercise.bodyPart],
            exercise,
          ];
        } else {
          bodyParts[exercise.bodyPart] = [exercise];
        }
      });

      state.equipments = equipments;
      state.targets = targets;
      state.bodyParts = bodyParts;
    },

    getExerciseById: (state, action: PayloadAction<string>) => {
      state.exerciseBy.id = state.exercises.find(
        (exercise) => exercise.id === action.payload
      );
    },

    getExercisesByBodyPart: (state, action: PayloadAction<string>) => {
      state.exerciseBy.bodyPart = state.bodyParts[action.payload];
    },

    getExercisesByEquipment: (state, action: PayloadAction<string>) => {
      state.exerciseBy.equipment = state.equipments[action.payload];
    },
  },
});

export const {
  initApiCall,
  getExerciseById,
  getExercisesByBodyPart,
  getExercisesByEquipment,
} = apiSlice.actions;

export default apiSlice.reducer;
