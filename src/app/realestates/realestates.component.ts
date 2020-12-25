import { Component, OnInit } from '@angular/core';
import { Realestate } from '../realestate';
import { RealestateService } from '../realestate.service';

@Component({
  selector: 'app-realestates',
  templateUrl: './realestates.component.html',
  styleUrls: ['./realestates.component.css']
})
export class RealestatesComponent implements OnInit {

  Realestate: Realestate[];

  constructor(private rltsService: RealestateService) {}

  ngOnInit(): void {
     this.getRealestatesList();
  }

  getRealestatesList() {
    return this.rltsService.getRealestates()
               .subscribe(
                rlts => {
                  console.log(rlts)
                  this.Realestate = rlts
                  
                 }
                );
 }
}



