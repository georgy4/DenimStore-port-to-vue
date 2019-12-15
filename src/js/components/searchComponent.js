let searchComponent = {
  template: `
    <div class="search-wrapper">
      <input type="search" name="Search field" placeholder="Search.." class="input-search header-bottom__input-search" ref="searchInput">
    </div>
  `,
  methods: {
    searchInFocus() {
      this.$refs.searchInput.focus()
    }
  }
}