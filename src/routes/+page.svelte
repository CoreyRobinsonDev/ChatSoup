<script lang="ts">
    import type { Item } from "$lib/types";
    import Combobox from "$lib/components/custom/combobox/combobox.svelte";


    const items: Item[] = [
	{
	    value: "backlog",
	    label: "Backlog"
	},
	{
	    value: "todo",
	    label: "Todo"
	},
	{
	    value: "in progress",
	    label: "In Progress"
	},
	{
	    value: "done",
	    label: "Done"
	},
	{
	    value: "canceled",
	    label: "Canceled"
	},
	{
	    value: "test",
	    label: "Test"
	}
    ];
</script>


<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
	ChatSoup
</h1>
<Combobox items={items}></Combobox>
