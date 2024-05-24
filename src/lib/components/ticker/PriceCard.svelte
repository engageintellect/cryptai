<script lang="ts">
  import Icon from '@iconify/svelte'
  import { floatToPercentage, floatToPrice } from '$lib/utils'
  export let price: any
  export let change: any
  export let volume: any
  export let high_24h: any
  export let low_24h: any
</script>

<div class="card bg-base-100 shadow-xl w-full">
  <div class="card-body p-5">
    <div class="card-title">current price</div>
    <div class="flex flex-col gap-5">
      <div class="card-title text-5xl text-nowrap">
        {floatToPrice(Number(price))}
      </div>

      <div>
        <div class=" pb-2">daily change</div>

        {#if change > 0}
          <div class="badge badge-success py-4 text-lg">
            {floatToPercentage(Number(change))}
          </div>
        {:else}
          <div class="badge badge-error py-4 text-lg">
            {floatToPercentage(Number(change))}
          </div>
        {/if}
      </div>

      <div class="w-full flex items-center gap-2 md:gap-5">
        <div class="w-full">
          <div class=" flex items-center gap-2 pb-2">
            <div class="">daily high</div>
            <Icon icon="mdi:arrow-up" class="w-5 h-5" />
          </div>
          <div class="badge badge-success py-4 text-lg">
            {floatToPrice(Number(high_24h))}
          </div>
        </div>

        <div class="w-full">
          <div class=" flex items-center gap-2 pb-2">
            <div class="">daily low</div>
            <Icon icon="mdi:arrow-down" class="w-5 h-5" />
          </div>
          <div class="badge badge-error py-4 text-lg">
            {floatToPrice(Number(low_24h))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
