import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Dish} from '../model/dish';
import {DishService} from '../service/dish/dish.service';
import {SearchForm} from '../model/search-form';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  categories: Category[] = [];
  selectedCategories: Category[] = [];
  top5Categories: Category[] = [];
  quickSearchCategoryId = -1;
  q: string;
  searchForm: SearchForm = {categories: []};
  pageDishes: Dish[] = [];
  resultTitle: string;
  endOfPage: boolean;
  isLoadMore = false;

  constructor(private categoryService: CategoryService,
              private dishService: DishService
  ) {
  }

  ngOnInit() {
    this.resetSearchForm();
    this.getAllCategories();
    this.getDishes();
  }

  scrollBackToTop() {
    document.getElementById(`app-navbar-customer`).scrollIntoView(true);
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(
      (response) => {
        this.categories = response as Category[];
      }
    );

    this.categoryService.getTop5Categories().subscribe((
      response => this.top5Categories = response as Category[]
    ));
  }

  searchWithName() {
    this.isLoadMore = false; // load từ đầu
    this.searchForm.q = (document.getElementById('q') as HTMLInputElement).value;
    this.getDishes();
  }

  getResultTittle() {
    if (this.searchForm.q.length === 0) {
      this.resultTitle = `Toàn bộ danh sách`;
      return;
    }
    if (this.searchForm.q.length > 0) {
      this.resultTitle = `Kết quả tìm kiếm cho món: ${this.searchForm.q}`;
    }
  }

  getDishes() {
    if (this.quickSearchCategoryId !== -1) {
      this.searchForm.categories.push(
        {id: this.quickSearchCategoryId}
      );
    }
    this.dishService.searchDishes(this.searchForm).subscribe(
      dishes => {
        this.endOfPage = (dishes.length === this.pageDishes.length && this.isLoadMore);
        this.pageDishes = dishes;
        console.clear();
        console.log(this.searchForm);
        console.log(this.pageDishes);
      }
    );
    this.getResultTittle();

  }

  resetSearchForm() {
    this.searchForm.limit = 6;
    this.searchForm.q = '';
    this.searchForm.categories = [];
    this.endOfPage = false;
  }

  loadMore() {
    this.searchForm.limit += 6;
    this.getDishes();
    this.isLoadMore = true;
  }

  toggleCheckbox(categoryId: number) {
    this.isLoadMore = false; // load từ đầu
    this.searchForm.limit = 6;
    this.endOfPage = false;
    this.quickSearchCategoryId = -1;  // check box thì không quick search
    const index: number = this.findInSelectedCategory(categoryId);
    if (index === -1) {
      this.addToSelectedCategory(categoryId);
    } else {
      this.removeFromSelectedCategory(index);
    }
    this.searchForm.categories = this.selectedCategories;
    this.getDishes();
  }

  findInSelectedCategory(categoryId: number) {
    for (let i = 0; i < this.selectedCategories.length; i++) {
      if (categoryId === this.selectedCategories[i].id) {
        return i;
      }
    }
    return -1;
  }

  addToSelectedCategory(categoryId: number) {
    this.selectedCategories.push({id: categoryId});
  }

  removeFromSelectedCategory(index: number) {
    this.selectedCategories.splice(index, 1);
  }
}
