<script setup>
import { onMounted, ref } from "vue";

const mapElement = ref(null);

const markersData = [
  { position: { lat: 30.0444, lng: 31.2357 } },
  { position: { lat: 29.9792, lng: 31.1342 } },
  { position: { lat: 31.2001, lng: 29.9187 } },
];

onMounted(() => {
  if (!window.google || !mapElement.value) return;

  const map = new google.maps.Map(mapElement.value, {
    center: markersData[0].position,
    zoom: 12,
  });

  markersData.forEach((markerData) => {
    const marker = new google.maps.Marker({
      position: markerData.position,
      map,
    });

    marker.addListener("click", () => {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${markerData.position.lat},${markerData.position.lng}`,
        "_blank"
      );
    });
  });
});
</script>

<template>
  <div ref="mapElement" class="w-full max-h-[500px] h-[500px]"></div>
</template>
