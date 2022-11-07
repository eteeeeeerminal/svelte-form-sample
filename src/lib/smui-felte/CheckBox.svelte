<script lang="ts">
    import FormField from '@smui/form-field';
    import CheckBox from '@smui/checkbox';
    import { createField } from 'felte';

    export let name: string;
    export let checkBoxChecked: string;
    export let checkBoxOption: string;

    const { field, onInput, onBlur } = createField(name);

    let checked = checkBoxChecked ? [checkBoxChecked] : [];
    $: onInput(checked);
</script>

<div use:field on:blur={onBlur} role="checkbox" aria-checked={Boolean(checked)} tabindex="0">
    <FormField>
        <CheckBox bind:group={checked} value={checkBoxOption} />
        <span slot="label">{checkBoxOption}</span>
    </FormField>
    <p>選択された要素: {checked}</p>
</div>