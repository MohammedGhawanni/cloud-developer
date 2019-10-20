export const config = {
  "dev": {
    "username": process.env.UDAGRAM_USERNAME,
    "password": process.env.UDAGRAM_PASSWORD,
    "database": process.env.UDAGRAM_DATABASE,
    "host": process.env.UDAGRAM_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "aws_profile":process.env.AWS_PROFILE
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}

