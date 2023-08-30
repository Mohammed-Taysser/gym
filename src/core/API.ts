import axios from 'axios';

// 66cee6e8edmsh2862291631dabcfp19961bjsn2169dd4cac3b

const exerciseInstance = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '09a0988b78mshf28f3fed972c666p1a3175jsn86e98b42bd2b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});

function getExerciseById(id: string) {
  return exerciseInstance.get<Exercise[]>(`/exercise/${id}`);
}

function getExercises() {
  return exerciseInstance.get<Exercise[]>('/');
}

function getBodyPart() {
  return exerciseInstance.get<BodyParts>('/bodyPartList');
}

function getExercisesByBodyPart(bodyPart: string) {
  return exerciseInstance.get<Exercise[]>(`/bodyPart/${bodyPart}`);
}

function getEquipments() {
  return exerciseInstance.get<Equipments>('/equipmentList');
}

function getExercisesByEquipment(equipment: string) {
  return exerciseInstance.get<Exercise[]>(`/equipment/${equipment}`);
}

function getTargetMuscles() {
  return exerciseInstance.get<TargetMuscles>('/targetList');
}

export {
  getExerciseById,
  getExercises,
  getBodyPart,
  getEquipments,
  getTargetMuscles,
  getExercisesByBodyPart,
  getExercisesByEquipment,
};
