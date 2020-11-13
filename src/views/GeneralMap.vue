<template>
    <div style="height: 500px; width: 100%">
        <div style="height: 200px overflow: auto;">
            <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
            <button @click="showMap = !showMap">
                Toggle map
            </button>
        </div>
        <l-map
                v-if="showMap"
                :zoom="zoom"
                :center="center"
                :options="mapOptions"
                style="height: 80%"
                @update:center="centerUpdate"
                @update:zoom="zoomUpdate"
        >
            <l-tile-layer
                    :url="url"
                    :attribution="attribution"
            />

            <l-marker :lat-lng="[47.41322, -1.219482]">
            </l-marker>
        </l-map>
    </div>
</template>
<script>
    export default {
        name: 'generalMap',
        props: {
            attribution: {},
            center: {},
            centerUpdate: {},
            currentCenter: {},
            currentZoom: {},
            mapOptions: {},
            showMap: {},
            url: {},
            zoom: {},
            zoomUpdate: {}
        }
    }
</script>
