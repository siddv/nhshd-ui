<template>
    <b-table :data="data">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
            {{ props.row.id }}
        </b-table-column>

        <b-table-column field="Date" label="Date" sortable>
            {{ props.row.Date }}
        </b-table-column>

        <b-table-column field="Procedure" label="Procedure" sortable>
            {{ props.row.Procedure }}
        </b-table-column>
        
        <b-table-column field="Outcome" label="Outcome" sortable>
          <span class="tag is-success">
            {{ props.row.Outcome }}
          </span>
        </b-table-column>
        
        <b-table-column field="Recovery plan" label="Recovery Plan" sortable>
          {{ props.row['Recovery plan'] }}
        </b-table-column>

        <b-table-column label="See more" sortable>
          <b-button type="is-info">View more</b-button>
        </b-table-column>


      </template>
    </b-table>
</template>

<script>
    export default {
      data() {
        return {
          data: [
            {
              "Date": "01 December 2016",
              "Procedure": "Hip replacement",
              'Outcome': "Successful",
              "Recovery plan": "6 weeks physio treatment",
            }, 
            {
              "Date": "01 November 2016",
              "Procedure": "Hip stiffness - refferal",
              'Outcome': "Successful"
            },  
         ],
                columns: [
                    {
                        field: 'Procedure',
                        label: 'Procedure',
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
                ]
            }
        }
    }
</script>