/* tslint:disable */

import { Facture } from "./facture";

/* eslint-disable */
export interface Rapport {
  date?: string;
  id?: number;
  titre?: string;
  contenu:Array<Facture>
}
