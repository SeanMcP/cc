<script>
  // import { onMount } from 'svelte'
  import RouteLayout from "./RouteLayout.svelte";
  import { CC, COUNT } from "../data/cc";
  export let params = {};

  $: answer = CC[params.number].answer;
  $: number = Number(CC[params.number].number);
  $: question = CC[params.number].question;

  $: numberedQuestion = `${number}. ${question}`;
  $: previous = number > 1 ? CC[number - 1] : null;
  $: next = number < COUNT ? CC[number + 1] : null;
</script>

<style>
  div {
    display: flex;
    justify-content: space-between;
    flex-start: end;
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
  <p>{answer}</p>
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
