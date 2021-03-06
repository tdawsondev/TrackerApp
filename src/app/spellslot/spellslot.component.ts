import { Component, OnInit, Input } from '@angular/core';
import { SpellSlot } from '../spellslot';

@Component({
  selector: 'app-spellslot',
  templateUrl: './spellslot.component.html',
  styleUrls: ['./spellslot.component.scss']
})
export class SpellslotComponent implements OnInit {

@Input() spellSlot: SpellSlot = {
  level: 1,
  currentAmount: 1,
  maxAmount: 1
};

use(){
  this.spellSlot.currentAmount--;
  if(this.spellSlot.currentAmount<0){
    this.spellSlot.currentAmount= 0;
    alert("Out of level "+this.spellSlot.level+" slots!");
  }
}
rest(){
  this.spellSlot.currentAmount++;
  if(this.spellSlot.currentAmount> this.spellSlot.maxAmount){
    this.spellSlot.currentAmount = this.spellSlot.maxAmount;
  }
}

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
