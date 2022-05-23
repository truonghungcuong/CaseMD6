/* tslint:disable:no-trailing-whitespace */
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CategoryService} from 'src/app/service/category/category.service';
import {Router} from '@angular/router';
import {DishService} from '../../service/dish/dish.service';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {
  dishForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    price: new FormControl('', Validators.required),
    // categories: new FormControl('', Validators.requiredTrue)
    description: new FormControl(),
    image: new FormControl('', Validators.required)
  });

  constructor(private dishService: DishService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  get name() {
    return this.dishForm.get('name');
  }
  get price() {
    return this.dishForm.get('price');
  }
  // get categories() {
  //   return this.dishForm.get('price');
  // }
  get merchant() {
    return this.dishForm.get('merchant');
  }
  get description() {
    return this.dishForm.get('description');
  }
  // get image() {
  //   return this.dishForm.get('image');
  // }

  ngOnInit() {
  }

  createDish() {
    if (this.dishForm.valid) {
      this.dishService.createMerchantDish(this.dishForm.value).subscribe(() => {
        /// thong bao
      }, error => {
        // thong bao
      });
    } else {
      /// thOng bao
    }
    this.router.navigateByUrl('/dishes');
  }

}
