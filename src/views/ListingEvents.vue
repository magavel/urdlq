<template>
    <div>
        <h2>
            Liste des plats proposés
        </h2>
        <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
                <v-card>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title
                                    class="headline"
                                    v-text="item.title"
                            ></v-card-title>
                            <v-card-subtitle v-text="item.description"></v-card-subtitle>
                            <v-card-subtitle v-text="item.restaurant.name"></v-card-subtitle>
                            <v-card-actions>
                                <v-btn
                                        class="ml-2 mt-5"
                                        outlined
                                        rounded
                                        small
                                >
                                    Commander
                                </v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                        >
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    export default {
        name: 'ListingEvents',
        props: {
            items: {}
        }
    }
</script>
