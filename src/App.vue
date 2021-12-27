<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">复试Demo</div>

      <v-spacer></v-spacer>

      <v-btn href="http://www.skyland.net.cn/" target="_blank" text>
        <span class="mr-2">上海尊蓝</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  created() {

  },
};
</script>
