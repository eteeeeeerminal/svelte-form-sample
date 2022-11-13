<script lang="ts">
    import { ValidationMessage } from '@felte/reporter-svelte';

    export let name: string;
</script>

<ValidationMessage for={name} let:messages>
    <ul class="error-list">
        {#if Array.isArray(messages)}
            {#each messages as message}
                {#if message != null}
                    <li>{message}</li>
                {/if}
            {/each}
        {:else if messages != null}
            <li>{messages}</li>
        {/if}
    </ul>
</ValidationMessage>

<style>
    .error-list {
        list-style: '* ';
        color: red;
        font-weight: bold;
    }
</style>
