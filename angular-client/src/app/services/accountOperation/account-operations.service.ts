import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

export interface addOperation {
  accountNumber: number;
  action: string;
  amount: number;
  interest?: number;
  payments?: number;
}

const path = '/operations';

@Injectable({
  providedIn: 'root',
})
export class AccountOperationsService {
  private baseURL: string;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.baseURL = `http://localhost:4500`;
  }

  getOperations(accountNumber: number): Observable<any> {
    return this.http.get(`${this.baseURL}${path}/${accountNumber}`).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error) => {
        console.log(error);
        throw error;
      })
    );
  }

  addOperation(operation: addOperation): Observable<any> {
    return this.http.post(`${this.baseURL}${path}/new`, operation).pipe(
      tap((response) => {
        this.toastr.success('Operation added successfully!', 'Success', {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
          toastClass: 'toast-success',
        });
      }),
      catchError((error) => {
        this.toastr.error(
          'Failed to add Operation. Please try again.',
          'Error',
          {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right',
            toastClass: 'toast-error',
          }
        );
        throw error;
      })
    );
  }
}
