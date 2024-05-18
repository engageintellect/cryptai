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
  class="flex w-fit items-center gap-2 group/backButton"
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
      <div class="card-title text-5xl text-primary">token list</div>

      <!-- {JSON.stringify(data)} -->

      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {#each data.data as item}
              <!-- row 1 -->
              <tr>
                <th class="">{item.rank}</th>
                <td class="w-fit whitespace-nowrap font-bold">{item.symbol}</td>
                <td>{floatToPrice(Number(item.priceUsd))}</td>

                <td
                  class={item.changePercent24Hr > 0
                    ? 'bg-success text-success-content'
                    : 'bg-error text-error-content'}
                >
                  {floatToPercentage(Number(item.changePercent24Hr))}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
