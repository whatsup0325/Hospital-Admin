import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
export default defineConfig({
  server: {
    host: '127.0.0.1'
  },
  resolve: {
    alias:{
      "@":path.resolve(__dirname,"src"),
      "@static": path.resolve(__dirname, "static"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@mixins": path.resolve(__dirname, "src/mixins"),
      "@comps": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
    },

  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData:`
          @import "${path.resolve(__dirname, './node_modules/ayin-lessmixins/ayin-lessmixins.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color-expand.less')}";
          `
          //引入的less全局变量，来自于开源组件ayin-color和ayin-lessmixins，访问https://www.npmjs.com/package/ayin-color 查看相关信息
      }
    }
  },
  optimizeDeps: {
    include:['echarts','ayin-color'],
    exclude: ['techui-vue3-lite']
  },
  plugins: [vue()],
  base: "/Hospital-Admin/",
})
