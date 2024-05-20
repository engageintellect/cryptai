<script lang="ts">
  export let news: any
  import Icon from '@iconify/svelte'
</script>

<div class="card bg-base-200 overflow-auto shadow w-full">
  <div class="card-body p-5">
    <div class="card-title">news</div>

    <!-- {JSON.stringify(news.results)} -->

    <div class="flex flex-col gap-10">
      {#if news.totalResults > 0}
        {#each news.results as article}
          <a href={article.link} target="_blank" class="flex flex-col gap-2">
            <div class="font-bold">{article.title}</div>
            <div class="text-sm font-thin line-clamp-4">
              {article.description}
            </div>
            <a
              href={article.link}
              class="btn btn-sm btn-primary w-fit mt-2 flex items-center gap-2"
            >
              <div>read more</div>
              <Icon icon="mdi:post" class="w-5 h-5" />
            </a>
          </a>
        {/each}
      {:else}
        <div class="text-lg">No news available</div>
      {/if}
    </div>
  </div>
</div>
