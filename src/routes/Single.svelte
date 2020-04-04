<script>
  import RouteLayout from "./RouteLayout.svelte";
  import { CC, COUNT } from "../data/cc";
  import Question from '../components/Question.svelte';
  import { getNumberedQuestion } from '../utils/get-numbered-question';
  export let params = {};

  $: data = CC[params.number]
  $: number = Number(data.number);
  $: numberedQuestion = getNumberedQuestion(data)

  $: previous = number > 1 ? CC[number - 1] : null;
  $: next = number < COUNT ? CC[number + 1] : null;
</script>

<style>
  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    flex-grow: 1;
  }

  .next {
    text-align: right;
  }

  small {
    display: block;
  }
</style>

<RouteLayout title={numberedQuestion}>
  <Question data={data} withoutTitle />
  <div>
    {#if previous}
      <a href={`#/q/${previous.number}`} class="previous">
        Previous question
        <small>{previous.question}</small>
      </a>
    {/if}
    {#if next}
      <a href={`#/q/${next.number}`} class="next">
        Next question
        <small>{next.question}</small>
      </a>
    {/if}
  </div>
</RouteLayout>
