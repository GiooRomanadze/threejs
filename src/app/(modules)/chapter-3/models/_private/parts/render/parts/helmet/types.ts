import type { ReactNode } from 'react';
import type { GLTF } from 'three-stdlib';
import type { AnimationAction, Bone, MeshStandardMaterial, SkinnedMesh } from 'three';

export type modelType = GLTF & {
  nodes: {
    fox: SkinnedMesh;
    _rootJoint: Bone;
  };
  materials: {
    fox_material: MeshStandardMaterial;
  };
};

type actionType = 'Survey' | 'Walk' | 'Run';
export type actionsType = Partial<Record<actionType, AnimationAction>>;

export type FoxFn = () => ReactNode;
