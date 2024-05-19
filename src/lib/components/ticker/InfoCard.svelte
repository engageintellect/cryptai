<script lang="ts">
  export let marketCap: any
  export let supply: any
  export let maxSupply: any
  export let fng: any
  export let fngClassification: any

  import { largeFloatToText } from '$lib/utils'
</script>

<div class="card bg-base-200 shadow w-full">
  <div class="card-body p-5">
    <div class="card-title">market cap</div>
    <div class="text-3xl text-primary">
      {largeFloatToText(Number(marketCap))}
    </div>

    <div class="card-title">supply</div>
    <div class="text-3xl text-primary">
      {largeFloatToText(Number(supply))}
    </div>

    <div class="card-title">max supply</div>
    <div class="text-3xl text-primary">
      {largeFloatToText(Number(marketCap))}
    </div>
  </div>
</div>
