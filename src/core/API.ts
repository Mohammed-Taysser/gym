import axios from 'axios';

// 66cee6e8edmsh2862291631dabcfp19961bjsn2169dd4cac3b

const exerciseInstance = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '04849d31c8mshc2f5544ff88b682p17c43bjsn689d6977e0a9',
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
