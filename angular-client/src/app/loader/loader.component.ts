import { Component } from '@angular/core';
import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {}

  isLoading$ = this.loaderService.isLoading;
}
