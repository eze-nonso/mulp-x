import {Component, Inject} from '@angular/core';
import {NgModel} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {timer} from 'rxjs';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent {
  public amount = 0;
  public isSending = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { balance: number }, private _dialog: MatDialogRef<SendMoneyComponent>) {
  }

  public submit(): void {
    this.isSending = true;
    timer(2000).subscribe(() => {
      this.isSending = false;
      this._dialog.close(this.amount);
    });
  }

  public getErrorMessage(amountCtrl: NgModel): string | null {
    if (amountCtrl.errors?.['required']) {
      return 'Amount is required';
    }

    if (amountCtrl.errors?.['min']) {
      return 'Minimum amount is N100';
    }

    if (amountCtrl.errors?.['max']) {
      return 'Amount cannot exceed balance';
    }

    return null;
  }
}

