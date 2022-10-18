import ApiUserResource from './ApiUserResource';

export default interface ApiPixelResource {
  id: number;
  x: number;
  y: number;
  available: boolean;
  user?: ApiUserResource | null;
}
