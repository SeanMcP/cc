import Home from './Home.svelte'
import Single from './Single.svelte'

export default {
    '/': Home,
    '/q/:number': Single
}