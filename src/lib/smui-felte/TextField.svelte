<script lang="ts">
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import { createField } from 'felte';

    export let name: string;
    export let textValue: string;

    const { field, onInput, onBlur } = createField(name);

    $: onInput(textValue);
</script>

<div use:field on:blur={onBlur} role="textbox">
    <Textfield bind:value={textValue} label="プレースホルダー">
        <HelperText slot="helper">細かい説明</HelperText>
    </Textfield>
    <p>入力しているテキスト: {textValue}</p>
</div>