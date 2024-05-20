<script lang="ts">
  import type { Load } from '@sveltejs/kit'
  import Icon from '@iconify/svelte'
  import TitleCard from '$lib/components/ticker/TitleCard.svelte'
  import InfoCard from '$lib/components/ticker/InfoCard.svelte'
  import PriceCard from '$lib/components/ticker/PriceCard.svelte'
  import NewsCard from '$lib/components/ticker/NewsCard.svelte'
  import SentimentCard from '$lib/components/ticker/SentimentCard.svelte'
  import AiSentimentCard from '$lib/components/ticker/AiSentimentCard.svelte'

  export let data: any

  export const load: Load = async ({ params }) => {
    const slug = params.slug
    const response = await fetch(`https://api.example.com/search/${slug}`)
    const data = await response.json()

    return {
      props: {
        data,
      },
    }
  }
</script>

<div class="sticky top-0 py-2 bg-base-100 -z-[-1] -mx-2 px-2 border-b mb-2">
  <button
    on:click={() => history.back()}
    class="flex w-fit items-center gap-2 group/backButton"
  >
    <Icon
      icon="mdi:arrow-left"
      class="w-5 h-5 md:group-hover/backButton:-translate-x-1 transition-transform duration-200"
    />
    <div>back</div>
  </button>
</div>

<!-- {JSON.stringify(data.crypto)} -->

<div class="">
  <div class="flex flex-col gap-2">
    <TitleCard
      symbol={data.crypto.data.symbol || ''}
      title={data.crypto.data.id || ''}
      explorer={data.crypto.data.explorer || ''}
      rank={data.crypto.data.rank || ''}
      coinHomepage={data.gecko.links.homepage[0] || ''}
      reposUrl={data.gecko.links.repos_url.github[0] || ''}
      subreddit={data.gecko.links.subreddit_url || ''}
      whitepaper={data.gecko.links.whitepaper || ''}
      coinImage={data.gecko.image.large || ''}
    />

    <div class="flex flex-col md:flex-row gap-2 w-full">
      <PriceCard
        price={data.crypto.data.priceUsd}
        change={data.crypto.data.changePercent24Hr}
        volume={data.crypto.data.volumeUsd24Hr}
        vwap={data.crypto.data.vwap24Hr}
      />

      <InfoCard
        marketCap={data.crypto.data.marketCapUsd}
        supply={data.crypto.data.supply}
        maxSupply={data.crypto.data.maxSupply}
        fng={data.fng.data[0].value}
        fngClassification={data.fng.data[0].value_classification}
        genesisDate={data.gecko.genesis_date}
        hashingAlgorithm={data.gecko.hashing_algorithm}
      />
    </div>

    <div class="flex gap-2 w-full">
      <SentimentCard
        fng={data.fng.data[0].value}
        fngClassification={data.fng.data[0].value_classification}
      />
      <!-- <AiSentimentCard history={data.history} /> -->
    </div>
    <NewsCard news={data.news} />
  </div>
</div>

{JSON.stringify(data.gecko.genesis_date)}
