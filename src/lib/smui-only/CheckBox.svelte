<script lang="ts">
    import FormField from '@smui/form-field';
    import CheckBox from '@smui/checkbox';

    export let checkBoxChecked: string[];
    export let checkBoxOptions: string[];
</script>

{#each checkBoxOptions as value}
    <FormField>
        <CheckBox bind:group={checkBoxChecked} {value} />
        <span slot="label">{value}</span>
    </FormField>
{/each}
<p>選択された要素: {checkBoxChecked}</p>

