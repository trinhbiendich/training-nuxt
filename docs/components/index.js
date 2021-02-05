export { default as ListArticle } from '../../components/ListArticle.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyListArticle = import('../../components/ListArticle.vue' /* webpackChunkName: "components/list-article" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
