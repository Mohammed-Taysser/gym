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
    'X-RapidAPI-Key': '38a7cf783fmsh576755b7aeaccc2p1e4f28jsn2ef351960638',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});

function getExercises() {
  return exerciseInstance.get<Exercise[]>('/');
}

function getExercisesByBodyPart(bodyPart: string) {
  return exerciseInstance.get<Exercise[]>(`/bodyPart/${bodyPart}`);
}

function getBodyPart() {
  return exerciseInstance.get<BodyParts>('/bodyPartList');
}

function getEquipments() {
  return exerciseInstance.get<Equipments>('/equipmentList');
}

function getTargetMuscles() {
  return exerciseInstance.get<TargetMuscles>('/targetList');
}

export {
  getExercises,
  getBodyPart,
  getEquipments,
  getTargetMuscles,
  getExercisesByBodyPart,
};
