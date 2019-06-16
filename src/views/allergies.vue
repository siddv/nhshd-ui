<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
    export default {
        data() {
            return {
              data: [
                {
                  "Date": "02 February 2018",
                  "Name": "Codeine",
                  "Reaction": "Vomiting",
                  "Prescribed by": "Dr Jones",
                }
              ],
              columns: [
                {
                  field: 'Date',
                  label: 'Date',
                },
                {
                  field: 'Name',
                  label: 'Name',
                },
                {
                  field: 'Reaction',
                  label: 'Reaction',
                },
                {
                  field: 'Prescribed by',
                  label: 'Prescribed by',
                },
              ],
            }
        }
    }
</script>
