<script lang="ts">
    import Radio from '@smui/radio';
	import FormField from '@smui/form-field';

    export let radioSelected: string;
    export let radioOptions: string[];
</script>

{#each radioOptions as value}
    <FormField>
        <Radio bind:group={radioSelected} {value} />
        <span slot="label">{value}</span>
    </FormField>
{/each}
<p>選択された要素: {radioSelected}</p>

