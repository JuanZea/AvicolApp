<template>
  <div class="flex items-center justify-center">
    <div class="relative inline-block text-left dropdown">
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded="true"
          aria-controls="headlessui-menu-items-117"
        >
          <slot name="button"></slot>
        </button>
      </span>
      <div
        class="
          opacity-0
          invisible
          dropdown-menu
          transition-all
          duration-300
          transform
          origin-top-right
          -translate-y-2
          scale-95
        "
      >
        <div
          class="
            absolute
            right-0
            w-56
            mt-2
            origin-top-right
            bg-white
            border border-gray-200
            divide-y divide-gray-100
            rounded-md
            shadow-lg
            outline-none
          "
          aria-labelledby="headlessui-menu-button-1"
          id="headlessui-menu-items-117"
          role="menu"
        >
          <slot name="content"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>