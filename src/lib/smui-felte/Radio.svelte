<script lang="ts">
    import Radio from '@smui/radio';
	import FormField from '@smui/form-field';
    import { createField } from 'felte';

    export let name: string;
    export let radioSelected: string;
    export let radioOptions: string[];

    const { field, onInput, onBlur } = createField(name);

    $: onInput(radioSelected);
</script>

<!--
    aria-checked 読み上げ等でラジオボタンの状態を知らせるためにあるやつ。
    ほんとは、状態に応じて true とか false とか入れないといけないけど、めんどくさいので適当に埋める。
-->
<div use:field on:blur={onBlur} role="radio" aria-checked="mixed" tabindex="0">
    {#each radioOptions as value}
        <FormField>
            <Radio bind:group={radioSelected} {value} />
            <span slot="label">{value}</span>
        </FormField>
    {/each}
    <p>選択された要素: {radioSelected}</p>
</div>
