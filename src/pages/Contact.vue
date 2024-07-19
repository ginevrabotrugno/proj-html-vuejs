<script>
import FormMaps from "../components/others/FormMaps.vue";
import JumbotronMini from "../components/others/JumbotronMini.vue";

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
    overflow-x: hidden;
}

</style>