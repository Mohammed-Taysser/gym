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
