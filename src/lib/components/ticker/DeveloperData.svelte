<script lang="ts">
  export let stuff: any

  import { largeFloatToText } from '$lib/utils'
</script>

<div class="card bg-base-100 shadow-xl w-full">
  <div class="card-body p-5">
    <div class="">
      <div class="card-title">developer data</div>

      <table class="table mt-2">
        <tbody class="p-0">
          {#each Object.keys(stuff) as key}
            {#if key !== 'last_4_weeks_commit_activity_series' && key !== 'code_additions_deletions_4_weeks'}
              <tr class="p-0">
                <td class="font-bold p-0 py-2">{key.replaceAll('_', ' ')}</td>
                <td class="p-0 py-2 w-1/3">{stuff[key]}</td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>

      <!-- <div class="">
        {#each Object.keys(stuff) as key}
          {#if key !== 'last_4_weeks_commit_activity_series' && key !== 'code_additions_deletions_4_weeks'}
            <div class="p-0 flex items-center">
              <div class="font-bold p-0 py-2 w-full">
                {key.replaceAll('_', ' ')}
              </div>
              <div class="p-0 py-2 w-full">{stuff[key]}</div>
            </div>
          {/if}
        {/each}
      </div> -->
    </div>
  </div>
</div>
