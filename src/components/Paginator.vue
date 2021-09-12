<template>
  <ul class="flex text-center justify-center items-center my-12" v-if="pager.pages && pager.pages.length > 1">
    <li :class="{'disabled': pager.currentPage === 1}">
      <a class="page-link" @click="setPage(pager.currentPage - 1)">
        <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-chevron-left w-6 h-6">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </a>
    </li>
    <template class="flex h-12 font-medium rounded-full bg-gray-200">
      <li v-for="page in pager.pages" :key="page"
          class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          :class="{'bg-av-100': pager.currentPage === page}"
      ><a class="page-link w-full h-full text-center items-center flex justify-center" @click="setPage(page)">{{ page }}</a></li>
    </template>
    <li :class="{'disabled': pager.currentPage === pager.totalPages}">
      <a class="page-link" @click="setPage(pager.currentPage + 1)">
        <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-chevron-right w-6 h-6">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import paginate from 'jw-paginate';

export default {
  name: 'Paginator',
  props: {
    items: {
      type: Array,
      required: true
    },
    initialPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 1
    },
    maxPages: {
      type: Number,
      default: 10
    },
    disableDefaultStyles: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pager: {},
      ulStyles: {},
      liStyles: {},
      aStyles: {}
    }
  },
  emits: [
    'change-page'
  ],
  created() {
    this.setPage(this.initialPage);
  },
  methods: {
    setPage(page) {
      const {items, pageSize, maxPages} = this;
      const pager = paginate(this.items.length, page, pageSize, maxPages);
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      this.pager = pager;
      this.$emit('change-page', pageOfItems);
    }
  },
  watch: {
    items() {
      this.setPage(this.initialPage);
    }
  }
}
</script>