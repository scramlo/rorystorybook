<script lang="ts" setup>
defineProps<{ 
    hideHeader?: boolean;
    shadowSize?: 'small' | 'medium' | 'large';
}>();
</script>

<template>
    <article class="card" :class="shadowSize">
        <header>
            <h1 v-if="!hideHeader">
                <slot name="header">My Header</slot>
            </h1>
        </header>
        <main>
            <slot>
                <p>The body of my card.</p>
            </slot>
        </main>
    </article>
</template>

<style>
    .card {
        font-family: sans-serif;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .card.small {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card.medium {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card.large {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    header {
        font-size: 1rem;
        margin: 0;
        padding: 0.5em;
        background-color: #ccc;
    }

    main {
        padding: 1em;
    }

    header h1 {
        margin: 0;
    }
</style>