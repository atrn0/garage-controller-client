<template>
  <div class="home">
    <div v-if="token">
      <p>logged in</p>
    </div>
    <div v-else>
      <p>login button</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getToken, login } from '@/lib/auth'

@Component
export default class Home extends Vue {
  private token: string | null = null
  private loading = true
  private newToken = ''

  created() {
    this.token = getToken()
    this.loading = false
  }

  async doLogin() {
    login(this.newToken)
  }
}
</script>
<style></style>
