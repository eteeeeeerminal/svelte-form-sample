<script lang="ts">
    import Button, { Label } from '@smui/button';
    import TextField from '$lib/smui-only/TextField.svelte';
    import Select from '$lib/smui-only/Select.svelte';
    import Radio from '$lib/smui-only/Radio.svelte';
    import CheckBox from '$lib/smui-only/CheckBox.svelte';

    let textValue = "";
    let selectSelected = "";
    const selectOptions = [
        "ほげ", "ふが", "ぴよ"
    ];
    let radioSelected = "";
    const radioOptions = [
        "Vue", "React", "Svelte"
    ];
    let checkboxChecked: string[] = [];
    const checkboxOptions = [
        "fizz", "buzz"
    ];

    let submitted: object | null = null;
    const onSubmit = () => {
        submitted = {
            textValue,
            selectSelected,
            radioSelected,
            checkboxChecked
        }
    };
</script>

<h2>Svelte Material UI のサンプル</h2>
<p>Svelte Material UI だけで作るとこんな感じ。</p>

<form>
    <TextField bind:textValue />
    <Select bind:selectSelected {selectOptions} />
    <Radio bind:radioSelected {radioOptions} />
    <CheckBox bind:checkboxChecked {checkboxOptions} />

    <Button color="primary" variant="raised" type="button" on:click={onSubmit}>
        <Label>送信</Label>
    </Button>
</form>

{#if submitted != null}
    <h3>入力された結果</h3>
    <pre>{JSON.stringify(submitted, null, 2)}</pre>
{/if}
