<script lang="ts">
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';

    export let textValue: string;
</script>

<Textfield bind:value={textValue} label="プレースホルダー">
    <HelperText slot="helper">細かい説明</HelperText>
</Textfield>
<p>入力しているテキスト: {textValue}</p>

