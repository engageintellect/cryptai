<script lang="ts">
  import { floatToPercentage, floatToPrice } from '$lib/utils'
  export let price: any
  export let change: any
  export let volume: any
  export let vwap: any
</script>

<div class="card bg-base-200 shadow w-full">
  <div class="card-body p-5">
    <div class="card-title">current price</div>
    <div class="flex flex-col gap-5">
      <div class="card-title text-5xl text-nowrap font-bold">
        {floatToPrice(Number(price))}
      </div>

      <div>
        <div class="card-title">24h change</div>

        {#if change > 0}
          <div class="alert py-2 px-4 alert-success w-fit">
            {floatToPercentage(Number(change))}
          </div>
        {:else}
          <div class="alert py-2 px-4 alert-error w-fit">
            {floatToPercentage(Number(change))}
          </div>
        {/if}
      </div>

      <div>
        <div class="card-title">volume</div>
        <div class="text-2xl">{floatToPrice(Number(volume))}</div>
      </div>

      <div>
        <div class="card-title">vwap</div>
        <div class="text-2xl">{floatToPrice(Number(vwap))}</div>
        <div class="text-sm font-thin">
          {#if vwap > price}
            price is under vwap
          {:else}
            price is above vwap
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
