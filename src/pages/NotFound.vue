<script>
    export default {
        name: 'NotFound',
    }
</script>

<template>
    <div class="not-found">
        <h1>404 - Pagina Non Trovata</h1>
        <p>La pagina che stai cercando non esiste.</p>
        <router-link to="/">Torna alla Home</router-link>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.not-found {
    width: 100%;
    height: 100vh;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: $orange;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color: $grey;
    }

    a {
        font-size: 1.25rem;
        color: $green;
        text-decoration: none;
        border: 2px solid $green;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: $green;
            color: $white;
        }
    }
}
</style>
  