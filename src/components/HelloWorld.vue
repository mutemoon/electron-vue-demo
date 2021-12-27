<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          基于Electron与Vuetify的Demo
        </h1>

        <p class="subheading font-weight-regular">
          用于复试上海尊蓝信息科技的一个demo，主要功能为：在菜单栏的文件菜单中点击首选项，即可进行主题颜色的设置，相关配置将保存至本地。
          使用vuetify框架开发UI以及使用ipc技术进行主进程与渲染进程间的通信。
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
