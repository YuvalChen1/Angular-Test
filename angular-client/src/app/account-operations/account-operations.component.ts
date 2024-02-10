import { Component } from '@angular/core';
import { AccountOperationsService } from '../services/accountOperation/account-operations.service';
import { DatePipe } from '@angular/common';

export interface IOperation {
  _id: string;
  accountNumber: number;
  action: string;
  amount: number;
  interest?: number;
  payments?: number;
  timestamp: string;
}

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css'],
  providers: [DatePipe],
})
export class AccountOperationsComponent {
  public operations: IOperation[];
  public accountNumber: number;

  constructor(
    private operationsService: AccountOperationsService,
    private datePipe: DatePipe
  ) {
    this.operations = [];
    this.accountNumber = 0;
  }

  searchOperations() {
    this.loadOperations(this.accountNumber);
  }

  private loadOperations(accountNumber: number) {
    this.operationsService.getOperations(accountNumber).subscribe({
      next: (response: any) => {
        this.operations = response;

        this.operations.sort((a, b) => {
          return (
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
        });

        this.operations.forEach((operation: IOperation) => {
          operation.timestamp = operation.timestamp
            ? this.datePipe.transform(
                operation.timestamp,
                'dd/MM/yyyy HH:mm:ss'
              )
            : ('' as any);
        });
        console.log(response);
      },
      error: (error: any) => {
        console.error('Error fetching operations:', error);
      },
    });
  }
}
