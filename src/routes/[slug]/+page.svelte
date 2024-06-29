<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h2
  class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
>
    {data.title}
</h2>
<div>{@html data.content}</div>
