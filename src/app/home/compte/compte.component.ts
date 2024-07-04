import { Component, OnInit } from '@angular/core';
import { FactureControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  comptes:Array<any>=[];
  constructor(private service:FactureControllerService) { }

  ngOnInit(): void {
    this.getAllComptes();
  }

  getAllComptes():Array<any> {
    this.service.getCompte().subscribe(
      (value:Array<any>)=>{
        this.comptes=value;
      },
      (error:String)=>{
        console.log(error);
  
      },
      ()=>{}
    );
      return this.comptes;
  
  }

}
