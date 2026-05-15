<script setup>
import { ref } from 'vue'

const result = ref(null)
const error = ref(null)

async function runDemo() {
  result.value = null
  error.value = null

  if (!('getBattery' in navigator)) {
    error.value = 'Battery Status API is not supported in this browser.'
    return
  }

  try {
    const battery = await navigator.getBattery()
    result.value = {
      level: Math.round(battery.level * 100) + '%',
      charging: battery.charging ? 'Yes ⚡' : 'No 🔋',
      chargingTime: battery.chargingTime === Infinity ? 'N/A' : Math.round(battery.chargingTime / 60) + ' min',
      dischargingTime: battery.dischargingTime === Infinity ? 'N/A' : Math.round(battery.dischargingTime / 60) + ' min',
    }
  } catch (err) {
    error.value = 'Could not access battery info: ' + err.message
  }
}
</script>

<template>
  <div class="section">
    <h1 class="title">🔋 Battery Status API</h1>
    <p class="subtitle">Check your device's battery level and charging status, Made by Samir Cibis.</p>

    <button class="button is-primary" @click="runDemo">Check Battery</button>

    <div v-if="result" class="box mt-4">
      <p><strong>Level:</strong> {{ result.level }}</p>
      <p><strong>Charging:</strong> {{ result.charging }}</p>
      <p><strong>Time to full:</strong> {{ result.chargingTime }}</p>
      <p><strong>Time to empty:</strong> {{ result.dischargingTime }}</p>
    </div>

    <div v-if="error" class="notification is-danger is-light mt-4">
      ⚠️ {{ error }}
    </div>
  </div>
</template>