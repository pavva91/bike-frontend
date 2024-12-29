<script setup>
import TourImage from '../components/TourImage.vue'
import RollCarousel from '../components/carousel/roll/RollCarousel.vue'
import { onMounted } from 'vue'

import RoadImg01 from '../assets/img/tours/road/road1.jpg'
import RoadImg02 from '../assets/img/tours/road/road2.jpg'
import RoadImg03 from '../assets/img/tours/road/road3.jpg'
import RoadImg04 from '../assets/img/tours/road/road4.jpg'

import MtbImg01 from '../assets/img/tours/mtb/mtb1.jpg'
import GravelImg01 from '../assets/img/tours/gravel/gravel1.jpg'

// import StravaApiService from '@/services/StravaApiService'
import StravaApiService from '../services/StravaApiService.js'

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
    ></RollCarousel>

    <h2>{{ $t('tours.tourist-info-title') }}</h2>
    <p v-html="$t('tours.' + props.type + '.' + props.id + '.tourist-info')"></p>
    <h2>{{ $t('tours.technical-info-title') }}</h2>
    <p>{{ $t('tours.' + props.type + '.' + props.id + '.technical-info') }}</p>
    <h2>{{ $t('tours.strava') }}</h2>
    <p>TODO: Use strava API</p>
    <p>{{ props.type }}</p>
    <p>{{ props.id }}</p>
    <p>{{ $route.fullPath }}</p>

    <div v-if="$props.type === 'road' && $props.id === '4'">
      <iframe id="komoot_iframe" :src="komoot_full" frameborder="0"></iframe>
    </div>

    <button @click="getActivity()">Get Activity</button>
  </div>
</template>

<style>
#komoot_iframe {
  width: 100%;
  height: 800px;
}
</style>
