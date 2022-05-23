/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Dish} from '../../model/dish';
import {NotificationService} from '../../service/notification/notification.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MerchantService} from '../../service/merchant/merchant.service';
import {DishService} from '../../service/dish/dish.service';
import {AuthService} from '../../service/auth/auth.service';
import {Merchant} from '../../model/merchant';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';

declare var $: any;

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  dishId: number;
  dish: Dish = {};
  merchant: Merchant = {};
  allCategories: Category[] = [];
  categoryIds: number[] = [];
  dishForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('')
  });

  constructor(private notificationService: NotificationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private merchantService: MerchantService,
              private dishService: DishService,
              private authService: AuthService,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.dishId = +paramMap.get('id');
    });
  }

  get nameControl() {
    return this.dishForm.get('name');
  }

  get priceControl() {
    return this.dishForm.get('price');
  }

  get descriptionControl() {
    return this.dishForm.get('description');
  }

  get imageControl() {
    return this.dishForm.get('image');
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categoryBE => {
      this.allCategories = categoryBE as Category[];
      // Đặt getCurrentDish trong getAllCategory để xử lý đồng bộ
    });
  }

  ngOnInit() {
    this.getMerchant()
    this.getAllCategory();
    this.getCurrentDish(this.dishId);
  }

  toggleCategory(cateId: number) {
    let isChecked = $(`#cb-category-${cateId}`).is(':checked');
    if (isChecked) {
      this.categoryIds.push(cateId);
    } else {
      for (let i = 0; i < this.categoryIds.length; i++) {
        if (this.categoryIds[i] == cateId) {
          this.categoryIds.splice(i, 1);
        }
      }
    }
  }

  getNewCategories(){
    // for
  }

  getCurrentDish(id) {
    this.dishService.getById(id).subscribe(dish => {
      this.dish = dish;
      for (let cate of dish.categories) {
        this.categoryIds.push(cate.id);
      }

      this.nameControl.setValue(this.dish.name);
      this.priceControl.setValue(this.dish.price);
      this.descriptionControl.setValue(this.dish.description);
    });
    // tất cả cate trong DB cái nào nằm trong danh sách cate của currentDish thì tick
    // kiểm tra 1 số number có nằm trong 1 mảng number không
    }

  // editMerchantDish() {
  //   if (this.dishForm.valid) {
  //     this.dish.name = this.dishForm.value.name;
  //     this.dish.price = this.dishForm.value.price;
  //     this.dish.description = this.dishForm.value.description;
  //     this.dish.categories = this.currentDishCate;
  //     this.dish.merchant = this.merchant;
  //     this.dishService.updateDish(this.dishId, this.dish).subscribe(() => {
  //       this.notificationService.showMessage('success', 'Chỉnh sửa món ăn thành công');
  //       this.router.navigateByUrl('/merchant');
  //     }, error => {
  //       this.notificationService.showMessage('error', 'Đã xảy ra lỗi');
  //     });
  //   } else {
  //     this.notificationService.showMessage('error', 'Vui lòng kiểm tra lại thông tin nhập');
  //   }
  // }
  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(merchantBE => {
      this.merchant = merchantBE;
      // console.log(this.merchant);
    });
    // console.log(this.merchant);
  }
  editMerchantDish() {
    if (this.dishForm.valid) {
      let changedDish = new FormData();
      changedDish.append('id', '' + this.dishId);
      changedDish.append('name', this.dishForm.get('name').value);
      changedDish.append('price', this.dishForm.get('price').value);
      changedDish.append('description', this.dishForm.get('description').value);


      for (let i = 0; i < this.categoryIds.length; i++) {
        changedDish.append('categories[]', '' + this.categoryIds[i]);
      }

      const imageFile = (document.getElementById('image') as HTMLInputElement).files;
      if (imageFile.length > 0) {
        changedDish.append('image', imageFile[0]);
        console.log(changedDish.get('image'));
      }
      this.dishService.updateDish(this.dishId, changedDish).subscribe(() => {
        this.notificationService.showMessage('success', 'Sửa món ăn thành công');
        this.router.navigateByUrl('/merchant');
      }, error => {
        this.notificationService.showMessage('error', error.error.message);
      });
    }
  }
}
