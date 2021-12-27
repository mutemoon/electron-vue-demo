<template>
  <v-container class="ma-12">
    <v-row justify="space-between" no-gutters>
      <v-col class="text-h5" cols="auto"> 选择主题颜色 </v-col>
      <v-col cols="auto">
        <v-color-picker
          dot-size="25"
          hide-inputs
          mode="rgba"
          swatches-max-height="200"
          v-model="config.backgroundColor"
        ></v-color-picker>
      </v-col>
    </v-row>

    <v-row class="mt-12" justify="end" no-gutters>
      <v-col cols="auto">
        <v-btn
          @click="saveConfig"
          color="primary"
          class="white--text justify-end"
          >保存设置</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let debounce_flag = false;

export default {
  data() {
    return { config: { backgroundColor: "#FFFFFF" } };
  },
  methods: {
    saveConfig() {
      if (ipcRenderer.sendSync("save-user-config", this.config))
        alert("保存成功");
    },
  },
  created() {
    this.config = ipcRenderer.sendSync("get-user-config");
  },
  watch: {
    config: {
      deep: true,
      handler({ backgroundColor }) {
        if (!debounce_flag) {
          window.setTimeout(() => {
            debounce_flag = false;
            this.$vuetify.theme.themes.light.primary = backgroundColor.hex;
          }, 100);
          debounce_flag = true;
        }
      },
    },
  },
};
</script>

<style>
</style>