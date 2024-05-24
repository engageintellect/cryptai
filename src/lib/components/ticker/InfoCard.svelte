<script lang="ts">
  export let marketCap: any
  export let supply: any
  export let maxSupply: any
  export let genesisDate: any
  export let hashingAlgorithm: any
  export let volume: any

  import { largeFloatToText } from '$lib/utils'
</script>

<div class="card bg-base-100 shadow-xl w-full">
  <div class="card-body p-2 md:p-5">
    <div class="">
      <div class="card-title">ticker info</div>
      <table class="table mt-2">
        <tbody class="p-0">
          <tr class="p-0">
            <td class="font-bold p-0 py-2">volume</td>
            <td class="p-0 py-2 w-1/3">{largeFloatToText(Number(volume))}</td>
          </tr>
          <tr class="p-0">
            <td class="font-bold p-0 py-2">market cap</td>
            <td class="p-0 py-2 w-1/3">{largeFloatToText(Number(marketCap))}</td
            >
          </tr>
          <tr>
            <td class="font-bold p-0 py-2">supply</td>
            <td class="p-0 py-2 w-1/3">{largeFloatToText(Number(supply))}</td>
          </tr>
          <tr>
            <td class="font-bold p-0 py-2">max supply</td>
            <td class="p-0 py-2 w-1/3">{largeFloatToText(Number(maxSupply))}</td
            >
          </tr>

          {#if genesisDate !== null}
            <tr>
              <td class="font-bold p-0 py-2">genesis date</td>
              <td class="p-0 py-2 w-1/3">{genesisDate}</td>
            </tr>
          {/if}
          {#if hashingAlgorithm !== null}
            <tr>
              <td class="font-bold p-0 py-2">hashing algo</td>
              <td class="p-0 py-2 w-1/3">{hashingAlgorithm}</td>
            </tr>
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</div>
