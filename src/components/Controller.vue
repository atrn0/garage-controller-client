<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <p class="text-center">
        <v-btn outlined large block height="70px" @click="up"
          ><v-icon large>mdi-chevron-up</v-icon></v-btn
        >
      </p>
    </v-col>
    <v-col cols="12">
      <p class="text-center">
        <v-btn outlined large block height="70px" @click="stop"
          ><v-icon large>mdi-stop</v-icon></v-btn
        >
      </p>
    </v-col>
    <v-col cols="12">
      <p class="text-center">
        <v-btn outlined large block height="70px" @click="down"
          ><v-icon large>mdi-chevron-down</v-icon></v-btn
        >
      </p>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import sendCommand from '@/lib/cloudfunctions/sendCommand'

@Component
export default class Controller extends Vue {
  async up() {
    try {
      const error = await sendCommand({ cmd: 'push', pin: 16 })
      if (error) {
        // show warning
      }
    } catch (e) {
      // handle error
    }
  }
  async stop() {
    try {
      const error = await sendCommand({ cmd: 'push', pin: 20 })
      if (error) {
        // show warning
      }
    } catch (e) {
      // handle error
    }
  }
  async down() {
    try {
      const error = await sendCommand({ cmd: 'push', pin: 21 })
      if (error) {
        // show warning
      }
    } catch (e) {
      // handle error
    }
  }
}
</script>
