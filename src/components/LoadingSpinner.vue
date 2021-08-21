<template>
  <svg :width="width || 150" :height="height || 150" viewBox="23 25 50 50">
    <defs>
      <filter id="ldio-xll2ohmd1xi-filter" x="-100%" y="-100%" width="300%" height="300%"
              color-interpolation-filters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2.4000000000000004"></feGaussianBlur>
        <feComponentTransfer result="cutoff">
          <feFuncA type="table" tableValues="0 0 0 0 0 0 1 1 1 1 1"></feFuncA>
        </feComponentTransfer>
      </filter>
    </defs>
    <g filter="url(#ldio-xll2ohmd1xi-filter)">
      <g transform="translate(50 50)">
        <g>
          <circle cx="17" cy="0" r="5" fill="#6a040f">
            <animate attributeName="r" keyTimes="0;0.5;1"
                     values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="4s" repeatCount="indefinite"
                     begin="-0.25s"></animate>
          </circle>
          <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="4s"
                            repeatCount="indefinite" begin="0s"></animateTransform>
        </g>
      </g>
      <g transform="translate(50 50)">
        <g>
          <circle cx="17" cy="0" r="5" fill="#faa307">
            <animate attributeName="r" keyTimes="0;0.5;1"
                     values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="2s" repeatCount="indefinite"
                     begin="-0.2s"></animate>
          </circle>
          <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="2s"
                            repeatCount="indefinite" begin="-0.05s"></animateTransform>
        </g>
      </g>
      <g transform="translate(50 50)">
        <g>
          <circle cx="17" cy="0" r="5" fill="#d00000">
            <animate attributeName="r" keyTimes="0;0.5;1"
                     values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="1.3333333333333333s"
                     repeatCount="indefinite" begin="-0.15s"></animate>
          </circle>
          <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360"
                            dur="1.3333333333333333s" repeatCount="indefinite" begin="-0.1s"></animateTransform>
        </g>
      </g>
      <g transform="translate(50 50)">
        <g>
          <circle cx="17" cy="0" r="5" fill="#dc2f02">
            <animate attributeName="r" keyTimes="0;0.5;1"
                     values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="1s" repeatCount="indefinite"
                     begin="-0.1s"></animate>
          </circle>
          <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1s"
                            repeatCount="indefinite" begin="-0.15s"></animateTransform>
        </g>
      </g>
      <g transform="translate(50 50)">
        <g>
          <circle cx="17" cy="0" r="5" fill="#e85d04">
            <animate attributeName="r" keyTimes="0;0.5;1"
                     values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="0.8s"
                     repeatCount="indefinite" begin="-0.05s"></animate>
          </circle>
          <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="0.8s"
                            repeatCount="indefinite" begin="-0.2s"></animateTransform>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {height: String, width: String}
}
</script>