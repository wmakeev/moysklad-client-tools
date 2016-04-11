'use strict'

let embeddedEntityMetadata = client.from('EmbeddedEntityMetadata').load()

let attributeHash = embeddedEntityMetadata.reduce((res, metadata) => {
  if (metadata.attributeMetadata) {
    metadata.attributeMetadata.forEach(attributeMetadata => {
      res[`${metadata.name}.${attributeMetadata.name}`] = attributeMetadata.uuid
    })
  }
  return res
}, {})

console.log(JSON.stringify(attributeHash, null, 2))
