<script lang="ts">
  import type { Load } from '@sveltejs/kit'
  import Icon from '@iconify/svelte'
  import TitleCard from '$lib/components/ticker/TitleCard.svelte'
  import InfoCard from '$lib/components/ticker/InfoCard.svelte'
  import PriceCard from '$lib/components/ticker/PriceCard.svelte'
  import NewsCard from '$lib/components/ticker/NewsCard.svelte'
  import SentimentCard from '$lib/components/ticker/SentimentCard.svelte'
  import AiSentimentCard from '$lib/components/ticker/AiSentimentCard.svelte'
  import DeveloperData from '$lib/components/ticker/DeveloperData.svelte'

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

{#if !data}
  <div>Loading...</div>
{:else}
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

  <!-- {JSON.stringify(data.crypto)} -->

  <div class="w-full max-w-2xl mx-auto">
    <div class="flex flex-col gap-2">
      <TitleCard
        symbol={data?.gecko?.symbol || ''}
        title={data?.gecko?.name || ''}
        explorer={data?.gecko?.links?.blockchain_site[0] || ''}
        rank={data?.gecko?.market_cap_rank || ''}
        coinHomepage={data?.gecko?.links?.homepage[0] || ''}
        reposUrl={data?.gecko?.links?.repos_url?.github[0] || ''}
        subreddit={data?.gecko?.links?.subreddit_url || ''}
        whitepaper={data?.gecko?.links?.whitepaper || ''}
        coinImage={data?.gecko?.image?.large || ''}
      />

      <!-- {JSON.stringify(data.currentPrice.slug.usd)} -->
      <div class="flex flex-col md:flex-row gap-2 w-full">
        <PriceCard
          price={data?.gecko?.market_data?.current_price?.usd}
          change={data?.gecko?.market_data?.price_change_percentage_24h}
          volume={data?.gecko?.market_data?.total_volume?.usd}
          high_24h={data?.gecko?.market_data?.high_24h?.usd}
          low_24h={data?.gecko?.market_data?.low_24h?.usd}
        />

        <InfoCard
          marketCap={data?.gecko?.market_data?.market_cap?.usd}
          supply={data?.gecko?.market_data?.circulating_supply}
          maxSupply={data?.gecko?.market_data?.max_supply}
          genesisDate={data?.gecko?.genesis_date}
          hashingAlgorithm={data?.gecko?.hashing_algorithm}
          volume={data?.gecko?.market_data?.total_volume?.usd}
        />
      </div>

      <div class="flex flex-col md:flex-row gap-2 w-full">
        <DeveloperData stuff={data?.gecko?.developer_data} />
      </div>

      <div class="flex gap-2 w-full">
        <SentimentCard
          fng={data?.fng?.data[0].value}
          fngClassification={data?.fng?.data[0].value_classification}
        />
        <!-- <AiSentimentCard history={data.history} /> -->
      </div>
      <NewsCard news={data?.news} />
    </div>
  </div>
{/if}
