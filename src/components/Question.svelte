<script>
    import { getNumberedQuestion } from '../utils/get-numbered-question'
    export let withoutTitle = false
    export let data = {}

    $: showTitle = !withoutTitle
    $: numberedQuestion = getNumberedQuestion(data)
</script>

<p>{#if showTitle}<em>{numberedQuestion}</em> {/if}{data.answer}</p>