<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
    export default {
        data() {
            return {
                data: [
    {
      "GivenName": "Vera",
      "FamilyName": "Latimer",
      "RelationshipDescription": "Spouse",
      "AddressLine1": "14A St Pauls Road",
      "AddressLine2": "Weston-Super-Mare",
      "AddressLine3": "AddressLine3",
      "AddressLine4": "AddressLine4",
      "AddressLine5": "AddressLine5",
      "PostCode": "BS23 4AE",
      "EmailAddress": null,
      "TelephoneNumber": "0114 345 6787",
      "RelationshipFlag": "Next Of Kin",
      "TenancyDescription": "Child Services (Cheshire) /Liquid Logic"
    },
    {
      "GivenName": "Julie",
      "FamilyName": "Jones",
      "RelationshipDescription": "Daughter",
      "AddressLine1": "14A St Pauls Road",
      "AddressLine2": "Weston-Super-Mare",
      "AddressLine3": null,
      "AddressLine4": null,
      "AddressLine5": null,
      "PostCode": "BS23 4AE",
      "EmailAddress": "JulieJones@googly.com",
      "TelephoneNumber": "0112 554466",
      "MobileNumber": null,
      "RelationshipFlag": "Dependent",
      "TenancyDescription": "Child Services (Cheshire) /Liquid Logic"
    }

    ],
                columns: [
                    {
                        field: 'GivenName',
                        label: 'Relative First Name',
                    },
                    {
                        field:  'FamilyName',
                        label:  'Relative family name',
                    },
                    {
                        field: 'RelationshipDescription',
                        label: 'Relationship',
                    },
                    {
                        field: 'AddressLine1',
                        label: 'Address',
                    },
                    {
                        field:  'AddressLine2',
                        label:  'Town',
                    },
                    {
                        field:  'PostCode',
                        label:  'PostCode',
                    },
                    {
                        field: 'EmailAddress',
                        label: 'Email',
                    },
                    {
                        field: 'TelephoneNumber',
                        label: 'Phone number',
                    },
                    {
                        field:  'MobileNumber',
                        label:  'Mobile Number',
                    },
                    {
                        field:  'RelationshipFlag',
                        label:  'Relationship type',
                    },
                    {
                        field:  'TenancyDescription',
                        label:  'Tenancy',
                    }
                ]
            }
        }
    }
</script>
