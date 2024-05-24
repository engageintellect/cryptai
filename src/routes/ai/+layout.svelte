<script lang="ts">
  import { page } from '$app/stores'
  import Icon from '@iconify/svelte'
  const navigation = [
    {
      title: 'chat',
      href: '/ai/chat',
    },

    {
      title: 'a',
      href: '/ai/a',
    },
    {
      title: 'b',
      href: '/ai/b',
    },
    {
      title: 'c',
      href: '/ai/c',
    },
  ]
</script>

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
<div class="mt-2 max-w-2xl mx-auto p-2">
  <div class="w-full h-full bg-base-100">
    <a href="/ai" class="card-title text-5xl text-primary">ai</a>
  </div>
  <div class="divider bg-base-100" />
  <div class="flex flex-col md:flex-row w-full h-full">
    <ul
      class="sticky top-0 menu w-full menu-horizontal z-10 gap-2 overflow-auto flex flex-nowrap md:menu-vertical bg-base-100 h-full md:w-40 md:rounded-box"
    >
      {#each navigation as navItem}
        <li>
          <a
            href={navItem.href}
            class="text-lg font-medium bg-base-200 {$page.url.pathname ===
            navItem.href
              ? 'active hover:bg-neutral'
              : ''}">{navItem.title}</a
          >
        </li>
      {/each}
    </ul>
    <div class="w-full px-0 md:px-2">
      <slot />
    </div>
  </div>
</div>
