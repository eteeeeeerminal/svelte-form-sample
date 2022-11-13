<script lang="ts">
    import { createForm } from 'felte';
    import { reporter } from '@felte/reporter-svelte';
    import { validator } from '@felte/validator-yup';
    import * as yup from 'yup';
    import Button, { Label } from '@smui/button';
    import TextField from '$lib/smui-felte-valid-message/TextField.svelte';
    import Select from '$lib/smui-felte-valid-message/Select.svelte';
    import Radio from '$lib/smui-felte-valid-message/Radio.svelte';
    import CheckBoxList from '$lib/smui-felte-valid-message/CheckBoxList.svelte';

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
        [selectName]: "",
        [radioName]: radioOptions[2],
        [checkBoxName]: ["", "buzz"],
    };

    const schema = yup.object({
        [textboxName]: yup.string().required(),
        [selectName]: yup.string().required(),
        [radioName]: yup.string().equals(['Svelte']).required(),
        [checkBoxName]: yup.array().test("", (v) => {
            if (v == null) return false;
            console.log(v);
            v = v.filter((v) => Boolean(v));
            return v.length >= 1;
        }).required() //*/
    })

    const { form, data, isValid } = createForm({
        initialValues,
        onSubmit: (values) => {
            // ここの onSubmit は text input で enter するだけで呼ばれる。
            // ボタンを押したときだけ送信してほしいので今回は無し。
        },
        extend: [validator( {schema} ), reporter]
    })

    let submitted: object | null = null;
    const onSubmit = () => {
        if ($isValid) {
            submitted = $data
        } else {
            submitted = {
                message: "回答が間違っています"
            }
        }
    };
</script>

<h2>SMUI + Felte + yup でバリデーションするサンプル</h2>
<h4>初期値</h4>
<pre>{JSON.stringify(initialValues, null, 2)}</pre>

<form use:form>
    <TextField name={textboxName} textValue={initialValues[textboxName]} />
    <Select name={selectName} selectSelected={initialValues[selectName]} {selectOptions} />
    <Radio name={radioName} radioSelected={initialValues[radioName]} {radioOptions} />
    <CheckBoxList name={checkBoxName} checkBoxChecked={initialValues[checkBoxName]} checkBoxOptions={checkBoxOptions} />

    <Button color="primary" variant="raised" type="submit" on:click={onSubmit}>
        <Label>送信</Label>
    </Button>
</form>

<h3>現在入力されている値</h3>
<pre>{JSON.stringify($data, null, 2)}</pre>

{#if submitted != null}
    <h3>入力された結果</h3>
    <pre>{JSON.stringify(submitted, null, 2)}</pre>
{/if}

