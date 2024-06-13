import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CostumerService } from '../../services/costumer.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post-costomer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,MatIconModule,RouterLink],
  providers: [HttpClient],
  templateUrl: './post-costomer.component.html',
  styleUrl: './post-costomer.component.scss',
})
export class PostCostomerComponent {
  constructor(
    private fb: FormBuilder,
    private customerService: CostumerService,
    private router:Router
  ) {}

  postCustomerForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  postCustomer(){
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigateByUrl('/')
      }
    })
  }

}
