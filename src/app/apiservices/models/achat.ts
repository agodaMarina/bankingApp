/* tslint:disable */
/* eslint-disable */
import { ImageData } from '../models/image-data';
import { User } from '../models/user';
export interface Achat {
  dateEcheance?: string;
  dateEmission?: string;
  fournisseur?: string;
  id?: number;
  image?: ImageData;
  numero?: string;
  statut?: boolean;
  totalttc?: number;
  totaltva?: number;
  tva?: number;
  user?: User;
}
