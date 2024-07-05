/* tslint:disable */
/* eslint-disable */
import { ImageData } from '../models/image-data';
import { User } from '../models/user';
export interface Vente {
  client?: string;
  dateEmission?: string;
  id?: number;
  image?: ImageData;
  numero?: string;
  statut?: boolean;
  totalttc?: number;
  totaltva?: number;
  tva?: number;
  user?: User;
}
