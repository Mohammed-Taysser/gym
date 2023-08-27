import axios from 'axios';

// 66cee6e8edmsh2862291631dabcfp19961bjsn2169dd4cac3b

// const youtubeOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//   },
// };

const exerciseInstance = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': 'dedf7f4b66msh0b3fbb8d65c52e7p163b32jsncd9f01be0161',
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
