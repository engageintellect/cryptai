<script lang="ts">
  import Icon from '@iconify/svelte'
  import { floatToPrice, largeFloatToText, floatToPercentage } from '$lib/utils'
  import { strictObject } from 'zod'
  export let data: any
</script>

{#if !data}
  <div>Loading...</div>
{:else}
  <div class="sticky top-0 py-2 bg-base-100 -z-[-1] -mx-2 px-2 shadow-xl mb-2">
    <div class="max-w-2xl w-full mx-auto">
      <button
        on:click={() => history.back()}
        class="flex w-fit items-center gap-2 group/backButton sm:ml-2"
      >
        <Icon
          icon="mdi:arrow-left"
          class="w-5 h-5 md:group-hover/backButton:-translate-x-1 transition-transform duration-200"
        />
        <div>back</div>
      </button>
    </div>
  </div>

  <div class="mt-2 w-full max-w-2xl mx-auto">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body p-2">
        <div class="card-title text-5xl text-primary">token list</div>
        <div class="text-base-content/70">current top 100 tokens</div>

        <div class="overflow-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>token</th>
                <th></th>
                <!-- <th>Name</th> -->
                <th>price</th>
                <th>24h change</th>
                <th>market cap</th>
                <th>volume</th>
                <th>all time low</th>
                <th>all time high</th>
              </tr>
            </thead>
            <tbody>
              {#each data.data as item}
                <tr>
                  <!-- <th class="">{item.market_cap_rank}</th> -->
                  <th class="flex items-center">
                    <a href={`/ticker/${item.id}`} class="avatar">
                      <div class="mask mask-squircle w-10 h-10">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </a>
                  </th>
                  <td class="w-fit whitespace-nowrap font-bold">
                    <a href={`/ticker/${item.id}`}>
                      <div class="font-bold uppercase">
                        {item.symbol}
                      </div>
                    </a>
                  </td>

                  <!-- <td class="whitespace-nowrap">{item.name}</td> -->
                  <td>{floatToPrice(Number(item.current_price))}</td>

                  <td class="">
                    <div
                      class={Number(item.price_change_percentage_24h > 0)
                        ? 'badge badge-success'
                        : 'badge badge-error'}
                    >
                      {floatToPercentage(
                        Number(item.price_change_percentage_24h),
                      )}
                    </div>
                  </td>
                  <td class="whitespace-nowrap"
                    >${largeFloatToText(Number(item.market_cap))}</td
                  >

                  <td>{floatToPrice(Number(item.total_volume))}</td>
                  <td>{floatToPrice(Number(item.atl))}</td>
                  <td>{floatToPrice(Number(item.ath))}</td>
                </tr>
              {/each}

              <!-- <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
{/if}
