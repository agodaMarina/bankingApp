import { Component } from '@angular/core';
import { Facture } from 'src/app/apiservices/models';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  
facture:Facture={date:'',numero:'',tva:0,}

}
