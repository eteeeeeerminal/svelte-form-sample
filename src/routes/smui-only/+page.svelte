<script lang="ts">
    import Button, { Label } from '@smui/button';
	import FormField from '@smui/form-field';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
	import Select, { Option } from '@smui/select';
    import Radio from '@smui/radio';
    import CheckBox from '@smui/checkbox';

    let textValue = "";
    let selectSelected = "";
    const selectOptions = [
        "ほげ", "ふが", "ぴよ"
    ];
    let radioSelected = "";
    const radioOptions = [
        "Vue", "React", "Svelte"
    ];
    let checkBoxChecked: string[] = [];
    const checkBoxOptions = [
        "fizz", "buzz"
    ];

    let submitted: object | null = null;
    const onSubmit = () => {
        submitted = {
            textValue,
            selectSelected,
            radioSelected,
            checkBoxChecked
        }
    };
</script>

<h2>Svelte Material UI のサンプル</h2>
<p>Svelte Material UI だけで作るとこんな感じ。</p>

<form>
    <Textfield bind:value={textValue} label="プレースホルダー">
        <HelperText slot="helper">細かい説明</HelperText>
    </Textfield>
    <p>入力しているテキスト: {textValue}</p>

    <Select bind:value={selectSelected} label="選んでね" variant="standard">
        <Option value="" />
        {#each selectOptions as value}
            <Option {value}>{value}</Option>
        {/each}
    </Select>
    <p>選択された要素: {selectSelected}</p>

    {#each radioOptions as value}
        <FormField>
            <Radio bind:group={radioSelected} {value} />
            <span slot="label">{value}</span>
        </FormField>
    {/each}
    <p>選択された要素: {radioSelected}</p>

    {#each checkBoxOptions as value}
        <FormField>
            <CheckBox bind:group={checkBoxChecked} {value} />
            <span slot="label">{value}</span>
        </FormField>
    {/each}
    <p>選択された要素: {checkBoxChecked}</p>

    <Button color="primary" variant="raised" type="button" on:click={onSubmit}>
        <Label>送信</Label>
    </Button>
</form>

{#if submitted != null}
    <h3>入力された結果</h3>
    <pre>{JSON.stringify(submitted, null, 2)}</pre>
{/if}
