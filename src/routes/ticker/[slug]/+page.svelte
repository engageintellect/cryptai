<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'
  import Icon from '@iconify/svelte'
  import { floatToPrice, largeFloatToText, floatToPercentage } from '$lib/utils'

  export const load: Load = async ({ params }) => {
    const slug = params.slug
    const response = await fetch(`https://api.example.com/search/${slug}`)
    const data = await response.json()

    return {
      props: {
        data,
      },
    }
  }
</script>

<script lang="ts">
  export let data: any
</script>

<a
  href="javascript:history.back()"
  class="btn btn-sm btn-ghost flex w-fit items-center gap-2 group/backButton"
>
  <Icon
    icon="mdi:arrow-left"
    class="w-5 h-5 md:group-hover/backButton:-translate-x-1 transition-transform duration-200"
  />
  <div>back</div>
</a>

<div class="mt-5">
  <div class="card bg-base-100 shadow">
    <div class="card-body">
      <div class="card-title text-5xl text-primary">{data.data.id}</div>
    </div>
  </div>

  <div class="flex flex-col md:flex-row gap-2 w-full break-all mt-2">
    <div class="card bg-base-100 shadow w-full">
      <div class="card-body">
        <div class="card-title">price:</div>
        <div class="flex flex-col gap-5">
          <div class="card-title text-5xl text-nowrap font-bold">
            {floatToPrice(Number(data.data.priceUsd))}
          </div>

          <div>
            <div class="card-title">24h change:</div>

            {#if data.data.changePercent24Hr > 0}
              <div class="alert alert-lg alert-success w-fit">
                {floatToPercentage(Number(data.data.changePercent24Hr))}
              </div>
            {:else}
              <div class="alert alert-error card-title text-xl text-nowrap">
                {floatToPercentage(Number(data.data.changePercent24Hr))}
              </div>
            {/if}
          </div>

          <div>
            <div class="card-title">block explorer:</div>
            <div class="text-sm text-primary truncate">
              {data.data.explorer}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex md:flex-col gap-2 w-full">
      <div class="card bg-base-100 shadow w-full">
        <div class="card-body">
          <div class="card-title">rank:</div>
          <div class="text-xl md:text-3xl text-primary">{data.data.rank}</div>
          <div class="card-title">24hr vol:</div>
          <div class="text-xl md:text-3xl text-primary">
            {largeFloatToText(Number(data.data.volumeUsd24Hr))}
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow w-full">
        <div class="card-body">
          <div class="card-title">market cap:</div>
          <div class="text-xl md:text-3xl text-primary">
            {largeFloatToText(Number(data.data.marketCapUsd))}
          </div>

          <div class="card-title">supply:</div>
          <div class="text-xl md:text-3xl text-primary">
            {largeFloatToText(Number(data.data.supply))}
          </div>

          <div class="card-title">max supply:</div>
          <div class="text-xl md:text-3xl text-primary">
            {largeFloatToText(Number(data.data.maxSupply))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
