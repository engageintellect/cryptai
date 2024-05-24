<script lang="ts">
  export let fng: any
  export let fngClassification: any
</script>

<div class="card bg-base-100 shadow-xl w-full">
  <div class="card-body p-5">
    <div class="flex items-center justify-between gap-5 md:gap-10">
      <a
        href="https://alternative.me/crypto/fear-and-greed-index/"
        target="_blank"
        class={`btn md:btn-lg text-lg md:text-3xl ${fng > 75 ? 'btn-error' : 'btn-success'}`}
      >
        {fng}/100
      </a>
      <div class="min-w-[33%]">
        <div class="card-title text-3xl md:text-4xl lowercase">
          {fngClassification}
        </div>
        <progress
          class={`progress w-full ${fng > 75 ? 'progress-error' : 'progress-success'}`}
          value={fng}
          max="100"
        ></progress>

        <div class="flex items-center justify-between">
          <div class="font-thin">{fng}/100</div>
          <div class="font-thin">{fng}%</div>
        </div>
      </div>

      <!-- <div
        class={`radial-progress ${fng > 75 ? 'text-error-content bg-error border-4 border-error' : 'text-success-content bg-success border-4 border-success'}`}
        style={`--value:${fng}; --size:6rem;`}
        role="progressbar"
      >
        <div
          class={`${fng > 75 ? 'text-error-content' : 'text-success-content'}`}
        >
          {fng}/100
        </div>
      </div> -->
    </div>
  </div>
</div>
