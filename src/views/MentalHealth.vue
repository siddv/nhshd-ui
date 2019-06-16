<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
    export default {
        data() {
            return {
                data: [
        {
        "DiagnosisDate": "2019-01-10T09:53:44.177",
        "ICD10Code": null,
        "SnomedCTCode": "191736004",
        "DiagnosisDescription": " Obsessive-compulsive disorder",
        "ConfirmedBy": "Dr Smith",
        "Comments": "Suffers from thoughts of violence or aggression",
        "TenancyDescription": "Orglinks",
        "Active": "No",
        "StartDate": "2019-01-21T09:53:44.383",
        "EndDate": "2019-01-21T09:53:44.383",
        "Details": "CPA Episode",
        "TenancyDescription": "Orglinks" 
      },
      {
      "DiagnosisDate": "2019-01-10T09:53:44.177",
      "ICD10Code": null,
      "SnomedCTCode": "191736004",
      "DiagnosisDescription": " Obsessive-compulsive disorder",
      "ConfirmedBy": "Dr Smith",
      "Comments": "Suffers from thoughts of violence or aggression",
      "TenancyDescription": "Orglinks"
      }

    ],

                columns: [
                    {
                        field: 'DiagnosisDate',
                        label: 'Date of Diagnosis',
                    },
                    {
                        field:  'ICD10Code',
                        label:  'ICD10Code',
                    },
                    {
                        field: 'SnomedCTCode',
                        label: 'SnomedCTCode',
                    },
                    {
                        field: 'DiagnosisDescription',
                        label: 'Diagnosis Descritpion',
                    },
                    {
                        field:  'ConfirmedBy',
                        label:  'Clinician',
                    },
                    {
                        field:  'Comments',
                        label:  'Comments',
                    },
                    {
                        field: 'TenancyDescription',
                        label: 'Tenancy Description',
                    },
                    {
                        field: 'Active',
                        label: 'CPA Active',
                    },
                    {
                        field:  'StartDate',
                        label:  'CPA start date',
                    },
                    {
                        field:  'EndDate',
                        label:  'CPA end date',
                    },
                    {
                        field:  'Details',
                        label:  'CPA details',
                    }
                ]
            }
        }
    }
</script>
