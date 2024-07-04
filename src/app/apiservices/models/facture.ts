/* tslint:disable */

import { User } from "./user";

/* eslint-disable */
export interface Facture {
  date?: string;
  id?: number;
  numero?: string;
  totalttc?: number;
  totaltva?: number;
  tva?: number;
  user?: User;
  compte?: string;
}
