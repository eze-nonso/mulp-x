import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatDialogModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatIconModule, MatButtonModule,
    MatCardModule, MatTooltipModule
  ],
  exports: [MatInputModule, MatFormFieldModule, MatDialogModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule]
})
export class AngularMaterialModule {
}
