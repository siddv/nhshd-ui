<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
    export default {
        data() {
            return {
              data: [
                {
                  "Date": "16 May 2019",
                  "Name": "Fluoxetine",
                  "Dose": "20mg OD",
                  "Prescribed by": "Dr Jones",
                  "Review Date": "16 July 2019",
                  "Repeat": "Yes"
                },
                {
                  "Date": "02 February 2018",
                  "Name": "Codeine",
                  "Dose": "30mg BD",
                  "Prescribed by": "Dr Jones",
                  "Review Date": "-",
                  "Repeat": "No"
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
                  field: 'Dose',
                  label: 'Dose',
                },
                {
                  field: 'Prescribed by',
                  label: 'Prescribed by',
                },
                {
                  field: 'Review Date',
                  label: 'Review Date',
                },
                {
                  field: 'Repeat',
                  label: 'Repeat',
                }
              ],
            }
        }
    }
</script>
