terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
}

# Store the built React website.
resource "aws_s3_bucket" "website" {
  bucket_prefix = "mirmukhammad-cv-"

  tags = {
    Project = "personal-cv"
  }
}

# Keep the bucket private.
resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Configure how CloudFront authenticates requests to S3.
resource "aws_cloudfront_origin_access_control" "website" {
  name                              = "${aws_s3_bucket.website.id}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Use an AWS-managed caching configuration.
data "aws_cloudfront_cache_policy" "optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "website" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  comment             = "Personal CV website"

  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = "cv-s3-origin"

    origin_access_control_id = aws_cloudfront_origin_access_control.website.id
  }

  default_cache_behavior {
    target_origin_id       = "cv-s3-origin"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    compress        = true

    cache_policy_id = data.aws_cloudfront_cache_policy.optimized.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # HTTPS certificate for the AWS-provided CloudFront domain.
  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = {
    Project = "personal-cv"
  }
}

# Allow only this CloudFront distribution to read the website.
resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Sid    = "AllowCloudFrontReadOnly"
        Effect = "Allow"

        Principal = {
          Service = "cloudfront.amazonaws.com"
        }

        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.website.arn}/*"

        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.website.arn
          }
        }
      }
    ]
  })
}