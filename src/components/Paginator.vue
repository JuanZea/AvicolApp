<template>
  <ul class="flex text-center justify-center items-center" v-if="pager.pages && pager.pages.length > 1">
    <li :class="{'pointer-events-none': pager.currentPage === 1}">
      <a class="page-link" @click="setPage(pager.currentPage - 1)">
        <div class="mr-1 p-4 flex justify-center items-center rounded-lg bg-gray-200 cursor-pointer hvr-grow">
          <fai icon="chevron-left"/>
        </div>
      </a>
    </li>

    <template class="flex h-12 font-medium rounded-lg bg-gray-200">
      <li v-for="page in pager.pages" :key="page"
          class="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-lg select-none"
          :class="{'bg-av-100 bg-opacity-50': pager.currentPage === page}"
      ><a class="page-link w-full h-full text-center items-center flex justify-center" @click="setPage(page)">{{ page }}</a></li>
    </template>

    <li :class="{'pointer-events-none': pager.currentPage === pager.totalPages}">
      <a class="page-link" @click="setPage(pager.currentPage + 1)">
        <div class="p-4 ml-1 flex justify-center items-center rounded-lg bg-gray-200 cursor-pointer hvr-grow">
          <fai icon="chevron-right"/>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import {computed, ref, watch} from "vue";
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

  setup(props, context) {
    let pager = ref({});

    const setPage = (page) => {
      const newPager = paginate(props.items.length, page, props.pageSize, props.maxPages);
      const pageOfItems = props.items.slice(newPager.startIndex, newPager.endIndex + 1);
      newPager.currentPage = page
      pager.value = newPager;
      context.emit('change-page', pageOfItems);
    }

    setPage(props.initialPage);

    watch(computed(() => props.items), () => {
      setPage(props.initialPage)
    });

    return { setPage, pager };
  },
}
</script>