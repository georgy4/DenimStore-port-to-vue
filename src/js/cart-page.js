new Vue ({
  el: '#cart-app',
  components: {
    'product-item-in-cart': cartItemComponent
  },
  data: {
    totalPrice: 0,
    premium: false,
    delivery: 5,
    // датабэйс с товарами, так сказать. Элементы массива удаляются по нажатии на "удалить" 
    products: [
      {
        itemId: 123001,
        itemName: 'Overall',
        itemImg: 'img/2.jpg',
        itemPage: 'product.html',
        ItemPrice: 120,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        itemsLeft: 8
      },
      {
        itemId: 123002,
        itemName: 'Shirt',
        itemImg: 'img/3.jpg',
        itemPage: 'product.html',
        ItemPrice: 140,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        itemsLeft: 5
        }
    ]
  },
  methods: {
    // Вызывается из компонента каждый раз когда изменяется количество товара в компоненте
    getTotalPrice() {
      this.totalPrice = 0
      for (let i = 0; i < this.products.length; i++) {
        this.totalPrice += this.$refs.product[i].itemsAmount*
        this.products[i].ItemPrice
      }
      if (this.products.length >= 1) {
        this.totalPrice += this.delivery
      }
    },
    // вызывается из кмпонента при нажатии удалить
    deleteProduct(index) {
      setTimeout(() => {
        this.products.splice(index, 1)
        this.getTotalPrice()  
      }, 200);
    }
  },
  mounted() {
    // первичный рассчет общей стоимости всех товаров в корзине
    for (let i = 0; i < this.products.length; i++) {
      this.totalPrice += this.products[i].ItemPrice * this.$refs.product[i].itemsAmount
    }
    this.totalPrice += this.delivery
  }
})