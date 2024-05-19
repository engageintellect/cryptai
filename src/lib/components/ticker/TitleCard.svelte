<script lang="ts">
  export let title: string
  export let symbol: string
  export let explorer: string
  export let rank: string
  import Icon from '@iconify/svelte'
</script>

<div class="card bg-base-200 shadow">
  <div class="card-body p-5">
    <div class="flex justify-between items-start">
      <div>
        <div class="flex flex-col items-start w-full">
          <div class="card-title text-5xl">{symbol}</div>
          <div class="text-xl">{title}</div>
        </div>
        <a href={explorer} class="btn btn-sm btn-primary w-fit mt-2"
          >block explorer</a
        >
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
  </div>
</div>
