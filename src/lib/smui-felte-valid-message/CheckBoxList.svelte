<script lang="ts">
    import { createField } from 'felte';
    import CheckBox from './CheckBox.svelte';
    import ValidationMessage from './ValidationMessage.svelte';

    export let name: string;
    export let checkBoxChecked: string[];
    export let checkBoxOptions: string[];

    const { field, onBlur } = createField(name);
</script>

<!--
    これ自体は checkbox を集めたもので、checkbox ではないので、aria-checked は適当に
-->
<div use:field on:blur={onBlur} role="checkbox" aria-checked={undefined} tabindex="0">
    {#each checkBoxOptions as value, i }
        <CheckBox
            name={name+'.'+i}
            checkBoxChecked={checkBoxChecked[i]}
            checkBoxOption={value}
        />
        <br/>
    {/each}
    <ValidationMessage {name} />
</div>
