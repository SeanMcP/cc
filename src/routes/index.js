import Home from './Home.svelte'
import Range from './Range.svelte'
import Single from './Single.svelte'

export default {
    '/': Home,
    '/r/:range': Range,
    '/q/:number': Single
}