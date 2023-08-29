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
  hidePagination?: boolean;
  count?: number;
}

interface EquipmentsGridProps {
  equipments: Category;
  count?: number;
}

interface BodyPartsGridProps {
  bodyParts: Category;
  count?: number;
}

interface TargetMusclesGridProps {
  targetMuscles: Category;
  count?: number;
}

type Category = { [key: string]: Exercise[] };

interface APIInitState {
  exercises: Exercise[];
  equipments: Category;
  targets: Category;
  bodyParts: Category;
  exerciseBy: {
    equipment?: Exercise[];
    target?: Exercise[];
    bodyPart?: Exercise[];
    id?: Exercise;
  };
  similar: {
    equipment: Exercise[];
    bodyPart: Exercise[];
    target: Exercise[];
  };
}
