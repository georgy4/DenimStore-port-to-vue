new Vue({
  el: '#gallery-app',
  data: {
    productPicture: {
      id: 0,
      src: 'img/products/prod2.png'
    },
    thumbnailsSrc: [
      "img/products/prod2.png",
      "img/products/prod3.png",
      "img/products/prod4.png",
      "img/products/prod1.png"
    ]
  },
  methods: {
    updateImage(index) {
      this.productPicture.src = this.thumbnailsSrc[index]
      this.productPicture.id = index
    },
    showNextImg() {
      if (this.productPicture.id < this.thumbnailsSrc.length-1) {
        this.productPicture.src = this.thumbnailsSrc[this.productPicture.id + 1]
        this.productPicture.id = this.productPicture.id + 1
      } else {
        this.productPicture.src = this.thumbnailsSrc[0]
        this.productPicture.id = 0
      }
    },
    showPrevImg() {
      if (this.productPicture.id != 0) {
        this.productPicture.src = this.thumbnailsSrc[this.productPicture.id - 1]
        this.productPicture.id = this.productPicture.id - 1
      } else {
        this.productPicture.src = this.thumbnailsSrc[this.thumbnailsSrc.length - 1]
        this.productPicture.id = this.thumbnailsSrc.length - 1 
      }
    }
  }
})