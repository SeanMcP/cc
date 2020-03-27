<script>
  export let title;

  document.title = title ? `${title} - CC` : "CC";
</script>

<h1>{title}</h1>

<slot />
