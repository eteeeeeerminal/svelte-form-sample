<script lang="ts">
    import FormField from '@smui/form-field';
    import CheckBox from '@smui/checkbox';

    export let checkboxChecked: string[];
    export let checkboxOptions: string[];
</script>

{#each checkboxOptions as value}
    <FormField>
        <CheckBox bind:group={checkboxChecked} {value} />
        <span slot="label">{value}</span>
    </FormField>
{/each}
<p>選択された要素: {checkboxChecked}</p>

