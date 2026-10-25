output "website_bucket_name" {
  description = "S3 bucket used for website uploads"
  value       = aws_s3_bucket.website.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution used for cache invalidation"
  value       = aws_cloudfront_distribution.website.id
}

output "website_url" {
  description = "Public HTTPS URL of the CV website"
  value       = "https://${aws_cloudfront_distribution.website.domain_name}"
}