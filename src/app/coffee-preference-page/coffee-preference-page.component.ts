import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WinnerModalComponent } from '../winner-modal/winner-modal.component';
import { CoffeeService } from '../services/coffee.service';
import { BrewingMethod } from '../models/brewingmethod';
import { CoffeeBean } from '../models/coffeebean';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coffee-preference-page',
  templateUrl: './coffee-preference-page.component.html',
  styleUrls: ['./coffee-preference-page.component.scss']
})
export class CoffeePreferencePageComponent {

  loading: boolean = false;

  coffeeForm = this.formBuilder.group({
    body: [0],
    acidity: [0],
    sweetness: [0],
    aroma: [0],
    strength: [0],
    tasteNotes: new FormControl<string[]>([],Validators.required),
  });

notes: string[] = ['Chocolate', 'Fruity', 'Nutty', 'Floral', 'Spicy'];


  openDialog(data : Observable<{brew : BrewingMethod, coffee : CoffeeBean}>) {
    const dialogRef = this.dialog.open(WinnerModalComponent,{ data: data});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(){
    let result$ = this.coffeeService.calculateBestCup(this.coffeeForm.value.acidity ?? 0,
      this.coffeeForm.value.sweetness ?? 0,this.coffeeForm.value.body ?? 0,
      this.coffeeForm.value.strength ?? 0, this.coffeeForm.value.aroma ?? 0,this.coffeeForm.value.tasteNotes ?? [])
this.openDialog(result$);
  
  }

constructor(private formBuilder: FormBuilder,private dialog: MatDialog, private coffeeService : CoffeeService){}

}
