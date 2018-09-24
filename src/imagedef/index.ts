import { Format } from '../types/Format';
import { DefinitionRequirement } from '../types/Requirements';

export interface ImageFaceBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type DefinitionRequirement = DefinitionRequirement;

export default interface ImageDefinition {
  width: number;
  height: number;
  type: Format;
  alpha?: boolean;
  interlacing?: boolean;
  faces?: ImageFaceBox[];
  animated?: boolean;
  size?: number;
  lossy?: boolean;
  original?: ImageDefinition;
}
