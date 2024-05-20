<script lang="ts">
  export let fng: any
  export let fngClassification: any
</script>

<div class="card bg-base-200 shadow w-full">
  <div class="card-body p-5">
    <div class="flex items-center justify-center gap-5 md:gap-10">
      <div
        class={`radial-progress ${fng > 75 ? 'text-error-content bg-error border-4 border-error' : 'text-success-content bg-success border-4 border-success'}`}
        style={`--value:${fng}; --size:8rem;`}
        role="progressbar"
      >
        <div
          class={`${fng > 75 ? 'text-error-content' : 'text-success-content'}`}
        >
          {fng}/100
        </div>
      </div>
      <div>
        <div class="card-title text-5xl lowercase">{fngClassification}</div>
        <div class="font-thin">reccomendation message</div>
      </div>
    </div>
  </div>
</div>
