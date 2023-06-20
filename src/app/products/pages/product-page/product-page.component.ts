import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  //Forma más reciente para injectar dependencias
  private fb = inject(FormBuilder);

  public color: string = 'green'

  //constructor(private fb: FormBuilder) { }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }
}
