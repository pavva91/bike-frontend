<script setup>
import TourImage from '../components/TourImage.vue'
import RollCarousel from '../components/carousel/roll/RollCarousel.vue'
import { onMounted, onBeforeUpdate } from 'vue'

import RoadImg01 from '../assets/img/tours/road/road1.jpg'
import RoadImg02 from '../assets/img/tours/road/road2.jpg'
import RoadImg03 from '../assets/img/tours/road/road3.jpg'
import RoadImg04 from '../assets/img/tours/road/road4.jpg'

import MtbImg01 from '../assets/img/tours/mtb/mtb1.jpg'
import GravelImg01 from '../assets/img/tours/gravel/gravel1.jpg'

import LeafletMap from '../components/LeafletMap.vue'

// import StravaApiService from '@/services/StravaApiService'
import StravaApiService from '../services/StravaApiService.js'

import Chart from '../components/Chart.vue'
import ChartSimple from '../components/ChartSimple.vue'
import HighChartHeightProfile from '../components/HighChartHeightProfile.vue'

import { ref } from 'vue'

const chartOptions = ref({
  series: [
    {
      data: [1, 2, 3],
    },
  ],
})

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
})

// TODO: use i18n for descriptions
const roadItems = [
  {
    img: RoadImg01,
    desc: 'I muri marchigiani',
    id: 1,
    type: 'road',
  },
  {
    img: RoadImg02,
    desc: 'Urbino e Cesane',
    id: 2,
    type: 'road',
  },
  {
    img: RoadImg03,
    desc: 'San Bartolo',
    id: 3,
    type: 'road',
  },
  {
    img: RoadImg04,
    desc: 'Fano tra onde e colline',
    id: 4,
    komoot_url:
      '/tour/1855943062/embed?share_token=aRGOnN4ruECI61xrOwT3zHVc8es64DiVn5vLKdokP2f1RLRdWD&profile=1',
    // komoot_url: 'https://www.komoot.com/it-it/tour/1855943062/embed?share_token=aRGOnN4ruECI61xrOwT3zHVc8es64DiVn5vLKdokP2f1RLRdWD&profile=1',
    type: 'road',
  },
]

const mtbItems = [
  {
    img: MtbImg01,
    desc: 'MTB',
    id: 1,
    type: 'mtb',
  },
]

const gravelItems = [
  {
    img: GravelImg01,
    desc: 'GRAVEL',
    id: 1,
    type: 'gravel',
  },
]

let lang = localStorage.getItem('language')
let komoot_host = 'https://www.komoot.com/'
let komoot_full = komoot_host + 'en-en' + roadItems[3].komoot_url

function buildKomootURL(lang) {
  switch (lang) {
    case 'en':
      komoot_full = komoot_host + 'en-en' + roadItems[3].komoot_url
      break

    case 'it':
      komoot_full = komoot_host + 'it-it' + roadItems[3].komoot_url
      break

    case 'fr':
      komoot_full = komoot_host + 'fr-fr' + roadItems[3].komoot_url
      break

    case 'nl':
      komoot_full = komoot_host + 'nl-nl' + roadItems[3].komoot_url
      break

    default:
      komoot_full = komoot_host + 'en-en' + roadItems[3].komoot_url
      break
  }
}

onMounted(() => {
  buildKomootURL(lang)
})

async function getActivity() {
  const alertButtons = [
    {
      text: 'Confirm',
      role: 'confirm',
      handler: () => {
        // ApiService.getActivity(props.nft.walletId, props.nft.ID)
        ApiService.getActivity('3217089606119650242')
          .then(() => {
            // const message = "Correctly Removed";
            // Toast.show({
            //   text: message,
            // }).then(() => {
            new Promise((r) => setTimeout(r, 2000)).then(() => {
              location.reload()
            })
            // });
          })
          .catch((error) => {
            console.log(error)
            // TODO: Handle error
            const message = 'An error happened during removal'
            alert(message)
            // Toast.show({
            //   text: message,
            // }).then(() => {
            //   new Promise((r) => setTimeout(r, 2000)).then(() => {
            //     location.reload();
            //   });
            // });
          })
      },
    },
    {
      text: 'Abort',
      role: 'abort',
      // handler: () => {
      //   router.push({
      //     name: "Collections",
      //   });
      // },
    },
  ]

  // const alertMsg =
  //   "Are you sure of deleting NFT with contract: " +
  //   props.nft.contract +
  //   " and token Id: " +
  //   props.nft["token-id"];

  // const alertTx = await alertController.create({
  //   header: "Confirm Delete",
  //   subHeader: "NFT",
  //   message: alertMsg,
  //   buttons: alertButtons,
  // });

  // await alertTx.present();

  StravaApiService.getActivity('3217089606119650242')
    .then((res) => {
      console.log('api response: ', res)
      // TODO: do stuff with res
      // return data
      // const message = "Correctly Removed";
      // Toast.show({
      //   text: message,
      // }).then(() => {

      // new Promise((r) => setTimeout(r, 2000)).then(() => {
      //   location.reload()
      // })

      // });
    })
    .catch((error) => {
      console.log(error)
      // TODO: Handle error
      const message = 'An error happened during removal'
      alert(message)
      // Toast.show({
      //   text: message,
      // }).then(() => {
      //   new Promise((r) => setTimeout(r, 2000)).then(() => {
      //     location.reload();
      //   });
      // });
    })
}
</script>
<template>
  <div class="tours">
    <TourImage v-bind="$props"></TourImage>

    <RollCarousel
      v-if="$props.type == 'road'"
      type="road"
      :withMaskGradient="true"
      :items="roadItems"
    ></RollCarousel>
    <RollCarousel
      v-if="$props.type == 'mtb'"
      type="mtb"
      :withMaskGradient="true"
      :items="mtbItems"
    ></RollCarousel>
    <RollCarousel
      v-if="$props.type == 'gravel'"
      type="gravel"
      :withMaskGradient="true"
      :items="gravelItems"
    >
    </RollCarousel>

    <h2>{{ $t('tours.tourist-info-title') }}</h2>
    <p v-html="$t('tours.' + props.type + '.' + props.id + '.tourist-info')"></p>
    <h2>{{ $t('tours.technical-info-title') }}</h2>
    <p>{{ $t('tours.' + props.type + '.' + props.id + '.technical-info') }}</p>
    <h2>{{ $t('tours.route-title') }}</h2>

    <br />
    <LeafletMap v-bind="$props"></LeafletMap>
    <br />
    <br />
    <HighChartHeightProfile
      v-bind="$props"
      :startLabel="$t('tours.gpx-height.start')"
      :finishLabel="$t('tours.gpx-height.finish')"
      :xAxis="$t('tours.gpx-height.xaxis')"
      :yAxis="$t('tours.gpx-height.yaxis')"
    ></HighChartHeightProfile>

    <!-- <div v-if="$props.type === 'road' && $props.id === '4'"> -->
    <!--   <iframe id="komoot_iframe" :src="komoot_full" frameborder="0"></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '3'"> -->
    <!--   <iframe -->
    <!--     height="405" -->
    <!--     width="590" -->
    <!--     frameborder="0" -->
    <!--     allowtransparency="true" -->
    <!--     scrolling="no" -->
    <!--     src="https://www.strava.com/segments/7041089/embed" -->
    <!--   ></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '2'"> -->
    <!--   <iframe -->
    <!--     height="500px" -->
    <!--     width="100%" -->
    <!--     frameborder="0" -->
    <!--     allowtransparency="true" -->
    <!--     src="https://www.strava.com/routes/3216345703092077180" -->
    <!--   ></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '1'"> -->
    <!--   <iframe -->
    <!--     height="800px" -->
    <!--     width="100%" -->
    <!--     frameborder="0" -->
    <!--     allowtransparency="true" -->
    <!--     src="https://www.outdooractive.com/it/route/cicloturismo/italia/cupramontana-e-le-sue-colline/236745013/embed.html?flexView=true" -->
    <!--   ></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '1'"> -->
    <!--   <iframe height='500px' width='100%' frameborder='0' allowtransparency='true' src='src="https://staging.strava-embeds.com/route/3217800058174684208?fullWidth=true&style=hybrid&terrain=3d&clubId=176292&fromEmbed=true#ns=a51e121a-8908-4962-8fda-2a47bb66a13f&hostOrigin=https%3A%2F%2Fstories.strava.com&hostPath=%2Farticles%2F2024-giro-ditalia-preview&hostTitle=2024+Giro+d%E2%80%99Italia+Preview&mapHash=9.22/45.8357/11.9423/0/64"'></iframe> -->
    <!-- </div> -->

    <!-- <button @click="getActivity()">Get Activity</button> -->

    <!-- <highcharts :options="chartOptions"></highcharts> -->

    <!-- <Chart></Chart> -->
    <!-- <ChartSimple></ChartSimple> -->

    <br />

    <button class="cta-dl-gpx bg-red-700 hover:bg-red-300 text-white font-bold py-2 px-4 rounded">
      <a class="inline-flex items-center" :href="`/gpx/${props.type}/${props.type}${props.id}.gpx`">
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>

        <span>{{ $t('tours.download-gpx-cta') }}</span>
      </a>
    </button>
    <br />
  </div>
</template>

<style>
#komoot_iframe {
  width: 100%;
  height: 800px;
}

.cta-dl-gpx {
  margin-top: 16px;
  margin-bottom: 16px;
}

.cta-dl-gpx a {
  vertical-align: middle;
}

.cta-dl-gpx:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}
</style>
