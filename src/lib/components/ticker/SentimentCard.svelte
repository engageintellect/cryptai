<script lang="ts">
  export let fng: any
  export let fngClassification: any
</script>

<div class="card bg-base-200 shadow w-full md:w-1/2">
  <div class="card-body p-5">
    <div class="card-title lowercase">{fngClassification}</div>
    <div class="flex items-center justify-center">
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
    </div>
  </div>
</div>
