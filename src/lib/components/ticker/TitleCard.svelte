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

<div class="card bg-base-100 shadow-xl">
  <div class="card-body p-5">
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
            <div class="card-title text-5xl uppercase">{symbol}</div>
            <div class="text-xl text-base-content/50">{title}</div>
          </div>
        </div>
      </div>
      <div>
        <a
          href="/list"
          class="md:tooltip md:tooltip-left"
          data-tip="token rank"
        >
          <div class="">
            <div class="card-title text-lg">
              <div class="flex items-center gap-2">
                <Icon
                  icon="icon-park-solid:ranking-list"
                  class="text-primary w-7 h-7"
                />

                <div>
                  {rank}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="mt-5">
      <div class="pb-2">resources</div>

      <div class="flex gap-1 overflow-auto items-center">
        {#if explorer}
          <a href={explorer} class="btn btn-sm btn-primary whitespace-nowrap"
            >block explorer</a
          >
        {/if}

        {#if coinHomepage}
          <a
            href={coinHomepage}
            class="btn btn-sm btn-primary whitespace-nowrap">homepage</a
          >
        {/if}

        {#if whitepaper !== ''}
          <a href={whitepaper} class="btn btn-sm btn-primary whitespace-nowrap"
            >whitepaper</a
          >
        {/if}

        {#if reposUrl !== ''}
          <a href={reposUrl} class="btn btn-sm btn-primary whitespace-nowrap"
            >repository</a
          >
        {/if}

        {#if subreddit !== ''}
          <a href={subreddit} class="btn btn-sm btn-primary whitespace-nowrap"
            >subreddit</a
          >
        {/if}
      </div>
    </div>
  </div>
</div>
