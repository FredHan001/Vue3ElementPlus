import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// import { provideFluentDesignSystem, fluentMenu, fluentMenuItem, fluentDivider, } from "@fluentui/web-components";

// provideFluentDesignSystem()
//     .register(
//         fluentMenu(),
//         fluentMenuItem(),
//         fluentDivider()
//     );

createApp(App).use(router).use(ElementPlus).mount('#app')
