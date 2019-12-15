let cartItemComponent = {
  props: {
    itemname: String,
    itempage: String,
    itemimg: String,
    itemprice: Number,
    sizes: Array,
    itemsleft: Number
  },
  template: `
    <li class="cart-content__item">
      <a :href="itempage">
        <img :src="itemimg" alt="" class="cart-content__img">
      </a> 
      <div class="cart-content__product-info">
        <p class="cart-content__price">$ {{ itemprice }}</p>
        <a :href="itempage">
          <p class="cart-content__product-name">{{ itemname }}</p>
        </a> 
        <div class="cart-content-bottom">
          <div class="cart-content__product-color">
            <p>Color:</p> 
            <div class="cart-content__colors-item colors-list__item colors-list__item--active">
            </div>
          </div> 
          <p class="cart-content__product-size">
            <label for="size">Size:</label> 
            <select name="size" id="size">
              <option v-for="size in sizes"> {{ size }}</option> 
            </select>
          </p> 
          <p class="product-quantity">
            <label for="quantity">Quantity:</label> 
            <select name="quantity" id="quantity" v-model="itemsAmount" @click="updateTotalPrice">
              <option v-for="item in itemsleft"> {{ item }}</option> 
            </select>
          </p>
        </div>
      </div> 
      <button class="remove"></button>
    </li>
    `,
  data() {
    return {
      itemsAmount: 1
    }
  },
  methods: {
    updateTotalPrice() {
      this.$emit('update-total-price')
    }
  }
}