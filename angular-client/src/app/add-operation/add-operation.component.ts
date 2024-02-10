import { Component } from '@angular/core';
import { AccountOperationsService } from '../services/accountOperation/account-operations.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css'],
})
export class AddOperationComponent {
  operationData: any = {
    accountNumber: 0,
    action: 'deposit', 
    amount: 0,
    interest: 0.1,
    payments: 1, 
  };
  public selectedAction: string = 'deposit';
  public showExtraFields: boolean = false;

  constructor(private addOperationService: AccountOperationsService) {}

  toggleExtraFields(action: string): void {
    this.selectedAction = action;
    this.showExtraFields = action === 'loan';
  }

  addOperation() {
    this.addOperationService.addOperation(this.operationData).subscribe(
      (response: any) => {
        console.log('Operation added successfully:', response);

        this.operationData = {
          accountNumber: 0,
          action: '',
          amount: 0,
          interest: null, // Reset the placeholder value
        };
      },
      (error: any) => {
        console.error('Error adding operation:', error);
      }
    );
  }
}
