<script lang="ts">
  import { tick } from "svelte";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
 
  import type { Item } from "$lib/types";
  import { streamerState } from "$lib/streamerState.svelte";

	let { items }: {items: Item[]} = $props();
 
	let open = $state(false);
	let value = $state("");
 
	// let selectedItem = $derived(items.find((s) => s.value === value) ?? null);
 
  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
</script>
 
<div id="test" class="flex items-center space-x-4 w-auto inline-block">
  <p class="text-sm text-muted-foreground">Streamers</p>
  <Popover.Root bind:open let:ids>
    <Popover.Trigger asChild let:builder>
      <Button
        builders={[builder]}
        variant="outline"
        class="w-[300px] justify-start gap-3 relative pr-8 overflow-x-auto overflow-y-hidden w-auto"
      >
		{#if streamerState.streamers.length > 0}
			{#each streamerState.streamers as selectedItem}
				<Button 
					class="text-clip w-auto"
					onclick={() => {
						streamerState.removeStreamer(selectedItem);
						closeAndFocusTrigger(ids.trigger);
					}}
				>
					{selectedItem.label}
				</Button>
			{/each}
		{:else}
			Add Streamers
		{/if}
			<span class="absolute end-4">+</span>
      </Button>
    </Popover.Trigger>
    <Popover.Content class="p-0" align="start" side="right">
      <Command.Root>
        <Command.Input placeholder="Enter channel name..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group>
            {#each items as item}
              <Command.Item
                value={item.value}
                onSelect={(currentValue) => {
                  value = currentValue;
                  closeAndFocusTrigger(ids.trigger);
					streamerState.addStreamer(item);
                }}
              >
                {item.label}
              </Command.Item>
            {/each}
          </Command.Group>
        </Command.List>
      </Command.Root>
    </Popover.Content>
  </Popover.Root>
</div>
