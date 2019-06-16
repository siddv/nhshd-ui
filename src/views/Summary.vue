<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
    export default {
        data() {
            return {
                data: [
    {
    "Date": "2002-03-08T00:00:00",
    "Rubric": "Wax in ears",
    "ReadCode": "F504.",
    "Notes": "",
    "TenancyDescription": "Orglinks"
  }, {
    "Date": "2002-01-29T00:00:00",
    "Rubric": "Blocked nose",
    "ReadCode": "1C86.",
    "Notes": "",
    "TenancyDescription": "Orglinks"
  },

                ],
        columns: [
                    {
                        field: 'Rubric',
                        label: 'Active Issue',
                    },
                    {
                        field:  'Date',
                        label:  'Date',
                    },
                    {
                        field: 'Notes',
                        label: 'Notes',
                    },
                    {
                        field: 'ReadCode',
                        label: 'Read Code',
                    }  
                ]
            }
        }
    }
</script>
