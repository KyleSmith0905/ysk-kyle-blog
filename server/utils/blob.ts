import { S3Client } from '@aws-sdk/client-s3'

const blobStorage = new S3Client({
  region: 'auto',
  endpoint: `https://${useRuntimeConfig().s3AccountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: `${useRuntimeConfig().s3AccessKeyId}`,
    secretAccessKey: `${useRuntimeConfig().s3AccessKeySecret}`
  }
})

export { blobStorage }
