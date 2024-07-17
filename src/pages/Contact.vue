<script>
import FormMaps from "../components/FormMaps.vue";
import JumbotronMini from "../components/JumbotronMini.vue";

export default {
    name: 'Contact',
    components:{
        FormMaps,
        JumbotronMini,
    }
}
</script>

<template>
    <main>
        <section>
            <JumbotronMini />
        </section>
        <section>
            <FormMaps />
        </section>

    </main>
</template>

<style scoped lang="scss">
// provvisorio per dividere le sezioni
section{
    margin-bottom: 50px;
}

</style>