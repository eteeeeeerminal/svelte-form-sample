<script lang="ts">
    import Select, { Option } from '@smui/select';
    import { createField } from 'felte';
    import ValidationMessage from './ValidationMessage.svelte';

    export let name: string;
    export let selectSelected: string;
    export let selectOptions: string[];

    const { field, onInput, onBlur } = createField(name);

    $: onInput(selectSelected);
</script>

<div use:field on:blur={onBlur} role="listbox" tabindex="0">
    <Select bind:value={selectSelected} label="選んでね" variant="standard">
        <Option value="" />
        {#each selectOptions as value}
            <Option {value}>{value}</Option>
        {/each}
    </Select>
    <p>選択された要素: {selectSelected}</p>
    <ValidationMessage {name} />
</div>
