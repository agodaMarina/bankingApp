import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Facture } from 'src/app/apiservices/models';
import { FactureControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {


factureForm:FormGroup;
factures:Array<Facture>=[];
numero:string='';
tva:number=0;
totaltva:number=0;
totalttc:number=0;
facture!: Facture;
total:number=0;
  idToDelete!: number;

  constructor(private service:FactureControllerService,private fb: FormBuilder) {
    this.factureForm = this.fb.group({
      numero: [''],
      tva: [0],
      totalht: [0],
      totaltva: [{ value: 0, disabled: true }],
      totalttc: [{ value: 0, disabled: true }]
    });

    this.onChanges();
   }
  ngOnInit(): void {
    this.getAllFactures();
  }

  onChanges(): void {
    this.factureForm.get('totalht')?.valueChanges.subscribe(val => {
      this.updateTotals();
    });

    this.factureForm.get('tva')?.valueChanges.subscribe(val => {
      this.updateTotals();
    });
  }

  updateTotals(): void {
    const totalht = this.factureForm.get('totalht')?.value;
    const tva = this.factureForm.get('tva')?.value;

    if (totalht !== null && tva !== null) {
      const totaltva = totalht * (tva / 100);
      const totalttc = totalht + totaltva;

      this.factureForm.patchValue({
        totaltva: totaltva,
        totalttc: totalttc
      });
    }
  }

onSubmit(): void {
  this.numero = this.factureForm.get('numero')?.value;
  this.tva = this.factureForm.get('tva')?.value;
  this.totaltva = this.factureForm.get('totaltva')?.value;
  this.totalttc = this.factureForm.get('totalttc')?.value;

  this.facture={ numero:this.numero,tva:this.tva,totaltva:this.totaltva,totalttc:this.totalttc};
  this.service.ajoutFactureManuelle({body:this.facture}).subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err);
    }
  });
  this.getAllFactures();
    
}


getAllFactures(): Facture[] {
  this.service.getAllFactures().subscribe(
    (value:Array<Facture>)=>{
      this.factures=value;
    },
    (error:String)=>{

    },
    ()=>{}
  );
    return this.factures;
}

setFactureIdToDelete(id: number | undefined): void {
  if (id !== undefined) {
    this.idToDelete = id;
  } else {
    console.error('ID is undefined');
  }
}

deleteFacture(): void {
  
    this.service.deleteFacture({ id: this.idToDelete }).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllFactures();
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  
} 


}
