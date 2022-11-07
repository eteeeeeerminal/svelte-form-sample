<script lang="ts">
    import Select, { Option } from '@smui/select';

    export let selectSelected: string;
    export let selectOptions: string[];
</script>

<Select bind:value={selectSelected} label="選んでね" variant="standard">
    <Option value="" />
    {#each selectOptions as value}
        <Option {value}>{value}</Option>
    {/each}
</Select>
<p>選択された要素: {selectSelected}</p>

