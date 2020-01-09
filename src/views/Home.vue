<template>
  <v-container class="fill-height home-root">
    <v-col v-if="!loading">
      <controller v-if="token" />
      <v-row v-else justify="center" align="center">
        <v-col cols="12">
          <v-form @submit="doLogin">
            <v-text-field
              v-model="newToken"
              label="パスワード"
              :append-icon="showPasswdIcon ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPasswdIcon ? 'text' : 'password'"
              @click:append="showPasswdIcon = !showPasswdIcon"
              outlined
              required
            />
            <p class="text-right">
              <v-btn @click="doLogin" outlined large>ログイン</v-btn>
            </p>
          </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getToken, login } from '@/lib/auth'
import Controller from '@/components/Controller.vue'
@Component({
  components: { Controller }
})
export default class Home extends Vue {
  private token: string | null = null
  private loading = true
  private newToken = ''
  private showPasswdIcon = false

  created() {
    this.token = getToken()
    this.loading = false
  }

  async doLogin() {
    login(this.newToken)
    this.token = getToken()
  }
}
</script>
<style lang="scss">
.home-root {
  box-sizing: border-box;
}
</style>
