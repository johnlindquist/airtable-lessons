const airtable = require("airtable")
const base = airtable.base("appkkbU4gmO2cC5rR")

const applicants = base("Applicants")

const all = applicants.select({
  view: "All Applicants"
})

all.firstPage((error, records) => {
  const names = records.map(record =>
    record.get("Name")
  )

  console.log(names)
})
