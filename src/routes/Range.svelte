<script>
  import RouteLayout from "./RouteLayout.svelte";
  import Question from "../components/Question.svelte";
  import { CC } from "../data/cc"
  import { range } from '../utils/range'
  export let params = {};

  $: [start, end] = params.range.split("-");
  $: numbers = range(start, end)

</script>

<RouteLayout title={`Questions ${start} through ${end}`}>
    {#each numbers as number}
        <Question data={CC[number]} />
    {/each}
</RouteLayout>
