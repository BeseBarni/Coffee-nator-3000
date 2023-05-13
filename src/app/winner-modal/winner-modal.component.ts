import { Component, Inject, Input } from '@angular/core';
import { BrewingMethod } from '../models/brewingmethod';
import { CoffeeBean } from '../models/coffeebean';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-winner-modal',
  templateUrl: './winner-modal.component.html',
  styleUrls: ['./winner-modal.component.scss']
})

export class WinnerModalComponent {



constructor(@Inject(MAT_DIALOG_DATA) public data: Observable<{brew : BrewingMethod, coffee: CoffeeBean}>) {

}

}
