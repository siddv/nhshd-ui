exports.handler = async (event, context, callback) => {
  callback(null, {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(
      {"EncountersResult":[{"Date":"04 April 2019","Rubric":"Repeat Issue","ReadCode":".....","Notes":"Recommended 8 weeks of no heavy lifting","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"04 April 2019","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"04 April 2019","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"04 April 2019","Rubric":"Repeat Issue","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"04 April 2019","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"04 April 2019","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"04 April 2019","Rubric":"Repeat Issue","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"}],"TotalItemCount":600}
    )
  })
}