<script lang="ts">
    import { createForm } from 'felte';
    import Button, { Label } from '@smui/button';
    import TextField from '$lib/smui-felte/TextField.svelte';
    import Select from '$lib/smui-felte/Select.svelte';
    import Radio from '$lib/smui-felte/Radio.svelte';
    import CheckBoxList from '$lib/smui-felte/CheckBoxList.svelte';

    const selectOptions = [
        "ほげ", "ふが", "ぴよ"
    ];
    const radioOptions = [
        "Vue", "React", "Svelte"
    ];
    const checkBoxOptions = [
        "fizz", "buzz"
    ];

    const textboxName = "textbox";
    const selectName = "select";
    const radioName = "radio";
    const checkBoxName = "checkbox";
    const initialValues = {
        [textboxName]: "最初に入ってるやつ",
        [selectName]: selectOptions[2],
        [radioName]: radioOptions[2],
        [checkBoxName]: ["", "buzz"],
    };

    const { form, data } = createForm({
        initialValues,
        onSubmit: (values) => {
            // ここの onSubmit は text input で enter するだけで呼ばれる。
            // ボタンを押したときだけ送信してほしいので今回は無し。
        },
    })

    let submitted: object | null = null;
    const onSubmit = () => {
        submitted = $data
    };
</script>

<h2>SMUI + Felte のサンプル</h2>
<p>Svelte Material UI で入力された値を Felte に流し込む。</p>
<h4>初期値</h4>
<pre>{JSON.stringify(initialValues, null, 2)}</pre>

<form use:form>
    <TextField name={textboxName} textValue={initialValues[textboxName]} />
    <Select name={selectName} selectSelected={initialValues[selectName]} {selectOptions} />
    <Radio name={radioName} radioSelected={initialValues[radioName]} {radioOptions} />
    <CheckBoxList name={checkBoxName} checkBoxChecked={initialValues[checkBoxName]} checkBoxOptions={checkBoxOptions} />

    <Button color="primary" variant="raised" type="button" on:click={onSubmit}>
        <Label>送信</Label>
    </Button>
</form>

<h3>現在入力されている値</h3>
<pre>{JSON.stringify($data, null, 2)}</pre>

{#if submitted != null}
    <h3>入力された結果</h3>
    <pre>{JSON.stringify(submitted, null, 2)}</pre>
{/if}

