new Vue ({
  el: '#app',
  components: {
    'search-component': searchComponent
  },
  data: {
  },
  methods: {
    toBottom() {
      window.scrollTo(0, this.$refs.categories.getBoundingClientRect().top - 70);
      // 70 is a height of fixed header
    },
    focusSearch() {
      this.$refs.searchComponent.searchInFocus()
    }   
  }
}) 