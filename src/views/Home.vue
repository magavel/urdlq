<template>
  <v-row
          style="flex-wrap: nowrap;"
  >
    <v-col
            cols="5"
            class="flex-grow-0 flex-shrink-0">
      <ListingEvents :items="items"/>
    </v-col>
    <v-col
            cols="5"
            style="min-width: 100px;"
            class="flex-grow-0 flex-shrink-1"
    >
      <generalMap :attribution="attribution" :center="center" :center-update="centerUpdate"
                    :current-center="currentCenter" :current-zoom="currentZoom" :map-options="mapOptions"
                    :show-map="showMap" :url="url" :zoom="zoom" :zoom-update="zoomUpdate"/>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

import eventService from "../services/eventService";
import GeneralMap from "./GeneralMap";
import ListingEvents from "./ListingEvents";

export default {
  name: 'Home',
  components: {ListingEvents, GeneralMap},
  data() {
    return {
      items: [],
      zoom: 13,
      center: [47.41322, -1.219482],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: [47.41322, -1.219482],
      withTooltip: [47.41422, -1.250482],
      currentZoom: 11.5,
      currentCenter: [47.41322, -1.219482],
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  created() {
    this.loadEvents();
  },
  methods: {
    loadEvents() {
      eventService.getEvents().then(res => {
        this.items = res;
      });
      // TODO le catch pour envoyer l'erreur sur un toast
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },

}
</script>
<style>
  .example-custom-control {
    background: #fff;
    padding: 0 0.5em;
    border: 1px solid #aaa;
    border-radius: 0.1em;
  }
  .custom-control-watermark {
    font-size: 200%;
    font-weight: bolder;
    color: #aaa;
    text-shadow: #555;
  }
</style>
