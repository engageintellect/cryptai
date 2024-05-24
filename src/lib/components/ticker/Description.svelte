<script lang="ts">
  import Icon from '@iconify/svelte'
  export let description: any
</script>

<div class="card bg-base-100 overflow-auto shadow-xl w-full">
  <div class="card-body p-5">
    <div class="card-title">description</div>

    <!-- {JSON.stringify(news.results)} -->

    <div class="flex flex-col gap-10">
      {description}
    </div>
  </div>
</div>
