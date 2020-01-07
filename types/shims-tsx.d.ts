import Vue, { VNode } from 'vue'
import { AxiosInstance } from "axios";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
        [elemName: string]: any;
    }
  }
}
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
}
declare module '@nuxt/types' {
  interface NuxtAppOptions {
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
  }
}