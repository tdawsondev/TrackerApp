import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smallslot',
  templateUrl: './smallslot.component.html',
  styleUrls: ['./smallslot.component.scss']
})
export class SmallslotComponent implements OnInit {

slotUsed = false;
usedOn = "Spell Name";

  constructor() { }


  ngOnInit(): void {
  }

}
