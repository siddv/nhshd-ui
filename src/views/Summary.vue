

<template>
<div>
    <b-table :data="data" :columns="columns"></b-table>
    <b-table :data="data2" :columns="columns2"></b-table>
    <b-table :data="data3" :columns="columns3"></b-table>
    <b-table :data="data4" :columns="columns4"></b-table>



</div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                        {
                        "Date": "04 April 2019",
                        "Rubric": "Repeat Issue",
                        "ReadCode": "F504.",
                        "Notes": "Recommended 8 weeks of no heavy lifting",
                        "Type": "Encounter"
                    }, {
                        "Date": "04 April 2019",
                        "Rubric": "Surgery consultation",
                        "ReadCode": "1C86.",
                        "Notes": "",
                        "Type": "Encounter"
                    },
                ],
                data2: [
                        {
                        "Date": "01 December 2016",
                        "Procedure": "Hip replacement",
                        "Outcome": "Successful",
                        "Recovery plan": "6 weeks physio treatment",
                    }, {
                         "Date": "01 November 2016",
                         "Procedure": "Hip stiffness - refferal",
                         "Outcome": "Successful"
                    },
                ],
                data3:  [
                    {
                        "Date": "2005-07-08",
                        "Rubric": "INDIVINA tabs 1mg + 2.5mg",
                        "ReadCode": "fh1V.",
                        "Quantity": "84",
                        "Dosage": "AS SHOWN ON THE PACK",
                        "Units": "TAB",
                        "TenancyDescription": "Orglinks"
                    },
                    {
                        "Date": "2005-05-23",
                        "Rubric": "CLINDAMYCIN caps 150mg",
                        "ReadCode": "ea1w.",
                        "Quantity": "4",
                        "Dosage": "FOUR AS DIRECTED",
                        "Units": "CAP",
                        "TenancyDescription": "Orglinks"
                    },
                    {
                        "Date": "2005-03-21",
                        "Rubric": "KLIOVANCE tabs 1mg + 0.5mg",
                        "ReadCode": "fh1S.",
                        "Quantity": "84",
                        "Dosage": "AS DIRECTED",
                        "Units": "TAB",
                        "TenancyDescription": "Orglinks"
                    },
                ],
                data4:  [
                    {
                    "Category": "Allergies",
                    "CategoryComments": "Known Patient Allergies",
                    "AlertType": "Non Drug",
                    "AlertTypeComments": "Non-Drug Based Allergens",
                    "SubType": "Egg protein",
                    "SubTypeComments": "Egg protein",
                    "Description": null,
                    "Severity": "Severe",
                },
                {
                    "Category": "Allergies",
                    "CategoryComments": "Known Patient Allergies",
                    "AlertType": "Drug",
                    "AlertTypeComments": "Drug Based Allergens",
                    "SubType": "Codeine",
                    "SubTypeComments": "Codeine",
                    "Description": null,
                    "Severity": "Severe",
                },
                ],
                columns: [
                    {
                        field: 'Date',
                        label: 'Date',
                    },
                    {
                        field:  'Rubric',
                        label:  'Latest Issue',
                    },
                    {
                        field: 'Notes',
                        label: 'Notes',
                    },
                    {
                        field: 'ReadCode',
                        label: 'Read Code',
                    }  
                ],
                columns2: [
                    {
                        field: 'Date',
                        label: 'Date',
                    },
                    {
                        field:  'Procedure',
                        label:  'Procedure',
                    },
                    {
                        field: 'Outcome',
                        label: 'Outcome',
                    },
                    {
                        field: 'Recovery plan',
                        label: 'Recovery plan',
                    }  
                ],

                columns3:  [
                    {
                        field: 'Date',
                        label: 'Date',
                    },
                    {
                        field: 'Rubric',
                        label: 'Medication prescribed',
                    },
                    {
                        field: 'Quantity',
                        label: 'Quantity',
                    },
                    {
                        field: 'Dosage',
                        label: 'Dosage',
                    },
                    {
                        field: 'Units',
                        label: 'Units',
                    }
                ],

                columns4:   [
                    {
                        field: 'Category',
                        label: 'Allergy',
                    },
                    {
                        field:  'AlertType',
                        label:  'AlertType',
                    },
                    {
                        field:  'SubType',
                        label:  'Type',
                    },
                    {
                        field:  'Severity',
                        label:  'Severity',
                    }
                ]
            }
        }
    }
</script>
