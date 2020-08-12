import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $http: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $http: any
  }
  interface Context {
    $http: any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $http: any
  }
}

const httpPlugin: Plugin = ({ $http }: any, _) => {
  $http.onRequest(() => {})
  $http.onRetry(() => {})
  $http.onError(() => {})
}

export default httpPlugin
