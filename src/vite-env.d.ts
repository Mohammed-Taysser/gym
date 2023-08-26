/// <reference types="vite/client" />

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
