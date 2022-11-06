<script async script lang="ts">
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import Button, { Label } from '@smui/button';
</script>

<svelte:head>
    <!-- Material Icons -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <!-- Roboto -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
    />
    <!-- Roboto Mono -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto+Mono"
    />
    <link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
</svelte:head>

<TopAppBar variant="static">
    <Row>
        <Section>
            <Title>Svelte Form Sample</Title>
        </Section>
        <Section align="end">
            <Button
                href="https://github.com/eteeeeeerminal/svelte-form-sample"
                variant="unelevated"
            >
                <Label>GitHub</Label>
            </Button>
        </Section>
    </Row>
</TopAppBar>

<main>
    <slot />
</main>

<style>
    :global(body) {
        margin: 0;
    }
</style>
