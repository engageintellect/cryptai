<script lang="ts">
  export let title: string
  export let symbol: string
  export let explorer: string
  export let rank: string
  export let coinHomepage: string
  export let reposUrl: string
  export let subreddit: string
  export let whitepaper: string
  export let coinImage: string

  import Icon from '@iconify/svelte'
</script>

<div class="card bg-base-200 shadow">
  <div class="card-body p-2 md:p-5">
    <div class="flex justify-between items-start">
      <div>
        <div class="flex items-start gap-2">
          {#if coinImage !== ''}
            <div class="avatar">
              <div class="w-16 rounded-xl">
                <img src={coinImage} alt="" class="" />
              </div>
            </div>
          {/if}
          <div class="flex flex-col items-start w-full">
            <div class="card-title text-5xl">{symbol}</div>
            <div class="text-xl">{title}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="card bg-primary shadow">
          <div
            class="card-body p-2 text-primary-content flex justify-center items-center"
          >
            <div class="card-title text-xl">
              <div class="flex items-center gap-2">
                <Icon
                  icon="icon-park-solid:ranking-list"
                  class="text-primary-content"
                />

                <div>
                  {rank}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div>resources</div>

      <div class="flex gap-1 overflow-auto">
        {#if explorer !== ''}
          <a href={explorer} class="badge badge-primary py-3 whitespace-nowrap"
            >block explorer</a
          >
        {/if}

        {#if coinHomepage !== ''}
          <a
            href={coinHomepage}
            class="badge badge-primary py-3 whitespace-nowrap">homepage</a
          >
        {/if}

        {#if whitepaper !== ''}
          <a
            href={whitepaper}
            class="badge badge-primary py-3 whitespace-nowrap">whitepaper</a
          >
        {/if}

        {#if reposUrl !== ''}
          <a href={reposUrl} class="badge badge-primary py-3 whitespace-nowrap"
            >repository</a
          >
        {/if}

        {#if subreddit !== ''}
          <a href={subreddit} class="badge badge-primary py-3 whitespace-nowrap"
            >subreddit</a
          >
        {/if}
      </div>
    </div>
  </div>
</div>
