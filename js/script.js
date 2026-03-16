// products js
function render(list, array) {
  list.innerHTML = "";
  array.forEach((el) => {
    list.innerHTML += `
        <li class="featured__item">
        
          <div class="for__image">
            <img src="${el.img}" alt="images" class="featured__img" />
          </div>
          <div class="featured__info">
          <h3 class="featured__inner_title">${el.name}</h3>
          <ul class="featured__colors">
            <li class="colors__item"></li>
            <li class="colors__item"></li>
            <li class="colors__item"></li>
          </ul>
          <p class="featured__text">
            <span class="code">Code</span>
            -
            <span class="code__number">${el.code}</span>
          </p>
          <p class="featured__price">${el.price}</p>
          </div>
       <ul class="featured__icon_list">
        <li class="icon__item">
          <i class="fa-solid fa-cart-shopping"></i>
        </li>
        <li class="icon__item">
          <i class="fa-solid fa-heart"></i>
        </li>
      
      </ul>
      <button class="featured__btn">View Details</button>
        </li>
    `;
  });
}

const featuredList = document.querySelector(".featured__list");
render(featuredList, featuredProducts);
// products js
const newArribalList = document.querySelector(".new__list");

function newRender(array, list) {
  list.innerHTML = "";
  array.forEach((el) => {
    list.innerHTML += `
    <li class="new__item">
      <div class="new__for_img">
        <img src="${el.img}" alt="images" class="new__img" />
      </div>
      <div class="new__item_info">
        <strong class="new__item_title"> ${el.name}</strong>
      <div class="new__prices">
        <p class="new__real_price">${el.new_price}</p>
        <p class="new__del_price">${el.old_price}</p>
        </div>
      </div>
       <ul class="new__icon_list">
        <li class="new__icon_item">
          <i class="fa-solid fa-cart-shopping"></i>
        </li>
        <li class="new__icon_item">
          <i class="fa-solid fa-heart"></i>
        </li>
        </ul>
      <button class="new__btn">View Details</button>
    </li>`;
  });
}
newRender(newArrivals, newArribalList);

const trendList = document.querySelector(".trend__main_list");
function trendRender(array, list) {
  list.innerHTML = "";
  array.forEach((el) => {
    list.innerHTML += `
      <li class="trend__main_item">
        <div class="trend__for_img">
          <img src="${el.img}" alt="" class="trend__main_item__img" />
        </div>
        <h3 class="trend__main__subtitle">${el.name}</h3>
        <div class="trend__prices">
          <p class="trend__real_price">${el.newPrice}</p>
          <del class="trend__del_price">${el.oldPrice}</del>
        </div>
      </li>
    `;
  });
}
trendRender(trendArr, trendList);

let topCategoriesList = document.querySelector(".categories__list");
function topCategoriesFunc(array, list) {
  list.innerHTML = " ";
  array.forEach((el) => {
    list.innerHTML += `
    <li class="categories__item">
      <div class="categories__for_img">
        <img src="${el.img}" alt="" class="categories__img" />
      </div>
      <h3 class="categories__subtitle">${el.name}</h3>
      <p class="categories__price">${el.price}</p>
    </li>
    `;
  });
}

topCategoriesFunc(topCategoriesArr, topCategoriesList);

const blogList = document.querySelector(".leatest__list");
function blogRender(array, list) {
  list.innerHTML = "";
  array.forEach((el) => {
    list.innerHTML += `
     <li class="leatest__item">
        <img
          src="${el.img}"
          alt=""
          class="leatest__img"
        />
        <div class="leatest__user_info">
        <div class="leatest__user__top">
          <div class="leatest__user_name_wrapper">
          <i class="fa-solid fa-pen-nib leatest__icon"></i>
          <p class="leatest__user_name">${el.name}</p> 
          </div>
        <div class="leatest__user_data">
          <i class="fa-solid fa-calendar-alt leatest__icon"></i>
          <p class="leatest__data">${el.date}</p>
          </div>
        </div>
          <div class="leatest__info">
            <h3 class="leatest__subtitle">${el.title}</h3>
            <p class="leatest__text">${el.def}</p>
            <a href="#" class="leatest__link">Read More</a>
          </div>
        </div>
      </li>
    `;
  });
}
blogRender(blogArr, blogList);
