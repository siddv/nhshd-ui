exports.handler = async (event, context, callback) => {
  callback(null, {
    headers: {
      "content-type": "application/json"
    },
    statusCode: 200,
    body: JSON.stringify(
      {"EncountersResult":[{"Date":"2005-10-19T00:00:00","Rubric":"Repeat Issue","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"2005-10-19T00:00:00","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"2005-10-19T00:00:00","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"2005-10-19T00:00:00","Rubric":"Repeat Issue","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"2005-10-19T00:00:00","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"2005-10-19T00:00:00","Rubric":"Surgery consultation","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"},{"Date":"2005-10-19T00:00:00","Rubric":"Repeat Issue","ReadCode":".....","Notes":"","StaffCode":"ABC123","StaffRole":"Partner","Type":"Encounter","TenancyDescription":"Orglinks"}],"TotalItemCount":600}
    )
  })
}