<script lang="ts">
  import type { Load } from '@sveltejs/kit'
  import Icon from '@iconify/svelte'
  import TitleCard from '$lib/components/ticker/TitleCard.svelte'
  import InfoCard from '$lib/components/ticker/InfoCard.svelte'
  import PriceCard from '$lib/components/ticker/PriceCard.svelte'
  import NewsCard from '$lib/components/ticker/NewsCard.svelte'
  import SentimentCard from '$lib/components/ticker/SentimentCard.svelte'

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

<button
  on:click={() => history.back()}
  class="flex w-fit items-center gap-2 group/backButton mb-2"
>
  <Icon
    icon="mdi:arrow-left"
    class="w-5 h-5 md:group-hover/backButton:-translate-x-1 transition-transform duration-200"
  />
  <div>back</div>
</button>

<!-- {JSON.stringify(data.crypto)} -->

<div class="">
  <div class="flex flex-col gap-2">
    <TitleCard
      symbol={data.crypto.data.symbol}
      title={data.crypto.data.id}
      explorer={data.crypto.data.explorer}
      rank={data.crypto.data.rank}
    />

    <div class="flex flex-col md:flex-row gap-2 w-full">
      <PriceCard
        price={data.crypto.data.priceUsd}
        change={data.crypto.data.changePercent24Hr}
        volume={data.crypto.data.volumeUsd24Hr}
      />

      <InfoCard
        marketCap={data.crypto.data.marketCapUsd}
        supply={data.crypto.data.supply}
        maxSupply={data.crypto.data.maxSupply}
        fng={data.fng.data[0].value}
        fngClassification={data.fng.data[0].value_classification}
      />
    </div>

    <div class="flex gap-2 w-full">
      <SentimentCard
        fng={data.fng.data[0].value}
        fngClassification={data.fng.data[0].value_classification}
      />

      <NewsCard
        fng={data.fng.data[0].value}
        fngClassification={data.fng.data[0].value_classification}
      />
    </div>
  </div>
</div>
