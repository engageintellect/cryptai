<script lang="ts">
  import { PUBLIC_DOCS_URL } from '$env/static/public'
  import { currentUser } from '$lib/stores/user'
  import Icon from '@iconify/svelte'
  import { fade, slide } from 'svelte/transition'
  import SentimentCard from '$lib/components/ticker/SentimentCard.svelte'
  let query: string = ''

  import { goto } from '$app/navigation'

  let searchQuery = ''
  const handleSearch = async () => {
    if (searchQuery) {
      goto(`/ticker/${searchQuery}`)
    }
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault()
    handleSearch()
  }

  export let data
</script>

<div class="">
  {#if !$currentUser}
    <div class="hero bg-base-100">
      <div class="hero-content text-center">
        <div class="max-w-sm">
          <div class="flex items-center gap-2">
            <Icon
              icon="icon-park-solid:stock-market"
              class="w-20 h-20 text-primary"
            />
            <div class="text-7xl font-extrabold text-primary drop-shadow-lg">
              crypt<span class="text-primary/[33%]">ai</span>
            </div>
          </div>
          <p class="py-5">AI powered cryptocurrency insights, made simple.</p>
          <div class="max-w-md flex gap-2">
            <a
              href="/auth/register"
              class="btn btn-primary flex group items-center justify-between flex-1 group/registerButton"
            >
              <div>get started</div>
              <Icon
                icon="material-symbols:rocket"
                class="w-7 h-7 md:group-hover/registerButton:rotate-45 transition-transform duration-300"
              />
            </a>
            <a
              href="/auth/login"
              class="btn btn-primary btn-outline flex-1 flex items-cetner justify-between group/loginButton"
            >
              <div>login</div>
              <Icon
                icon="material-symbols:login"
                class="w-7 h-7 md:group-hover/loginButton:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      transition:fade={{ duration: 500 }}
      class="mockup-browser border border-base-300 shadow-xl mt-5"
    >
      <div class="mockup-browser-toolbar">
        <div class="bg-base-300 px-2 py-1 w-full card">
          <div class="flex items-center gap-1">
            <Icon icon="mdi-search" class="w-5 h-5" />
            <div class="">cryptai.engage-dev.com</div>
          </div>
        </div>
      </div>

      <div class="overflow-auto">
        <div
          class="flex overflow-auto justify-center h-64 sm:h-80 transition-all duration-300 items-center border-t border-base-300 bg-gradient-to-b from-primary to-primary/0 px-4 gap-2"
        >
          <Icon icon="cryptocurrency:btc" class="w-52 h-52 text-base-300" />
          <Icon icon="cryptocurrency:eth" class="w-52 h-52 text-base-300" />
          <Icon icon="cryptocurrency:sol" class="w-52 h-52 text-base-300" />
          <Icon icon="cryptocurrency:doge" class="w-52 h-52 text-base-300" />
          <Icon icon="cryptocurrency:xrp" class="w-52 h-52 text-base-300" />
          <Icon icon="cryptocurrency:ada" class="w-52 h-52 text-base-300" />
        </div>
      </div>
    </div>
  {:else}
    <div class="flex flex-col gap-10 mt-10">
      <div>
        <h1 class="text-7xl">
          <div
            class="tracking-tight text-primary font-extrabold flex items-center justify-center"
          >
            <div>crypt</div>
            <div class="font-thin text-primary/[33%] tracking-tighter">ai</div>
          </div>
        </h1>
        <p class="mt-2 flex justify-center gap-1">
          visit <a class="text-primary underline" href={PUBLIC_DOCS_URL}>docs</a
          > for more info
        </p>

        <div class="w-full max-w-md mx-auto mt-5">
          <div
            class="flex justify-between items-center bg-base-100 input input-bordered focus-within:outline-none w-lg"
          >
            <form class="w-full flex" on:submit={handleSubmit}>
              <input
                type="text"
                class="w-full"
                bind:value={searchQuery}
                placeholder="Enter cryptocurrency symbol..."
                autofocus
              />

              <button>
                <Icon
                  icon={query ? 'mdi-close' : 'mdi-search'}
                  class="w-7 h-7"
                />
              </button>
            </form>
          </div>
        </div>

        <div class="w-full flex gap-2 max-w-md mx-auto">
          <a href={`/list`} class="btn btn-primary my-2 flex-1">
            <div class="flex items-center gap-2">
              all cryptos

              <Icon icon="mdi-grid" class="w-7 h-7" />
            </div>
          </a>

          <a
            href="https://github.com/engageintellect/cryptai"
            class="btn btn-primary btn-outline my-2 flex-1 group/githubButton"
          >
            <div class="flex items-center gap-2">
              star on github

              <Icon icon="mdi-star" class="w-7 h-7" />
            </div>
          </a>
        </div>

        <div class="w-full max-w-md mx-auto">
          <div class="card-title mt-10">market data</div>

          <p class="text-base-content/70">
            Cryptai is a cryptocurrency insights platform powered by AI. We
            provide real-time market data, news, and sentiment analysis for
            cryptocurrencies.
          </p>
        </div>
      </div>
    </div>
  {/if}
</div>
