/// <reference types="vite/client" />
/// <reference types="axios" />

type SkeletonVariant = 'category' | 'exercise';

type BodyParts = string[];

type TargetMuscles = string[];

type Equipments = string[];

interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

interface AsyncProps<T> {
  setData: (data: T) => void;
  apiCall: () => Promise<AxiosResponse<T>>;
  children: React.ReactNode;
  variant?: SkeletonVariant;
}

type hide = ['target' | 'equipment' | 'bodyPart'];

interface ExerciseGridProps {
  exercises: Exercise[];
  hide?: hide;
}

interface APIInitState {
  exercises: Exercise[];
  equipments: { [key: string]: Exercise[] };
  targets: { [key: string]: Exercise[] };
  bodyParts: { [key: string]: Exercise[] };
  exerciseBy: {
    equipment?: Exercise[];
    bodyPart?: Exercise[];
    id?: Exercise;
  };
}
