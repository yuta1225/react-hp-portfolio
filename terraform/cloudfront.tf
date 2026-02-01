# wwwナシをwwwアリにリダイレクトするなら、　s3バケットを経由させる必要がある
# プログラム入ってるS3バケットへのアクセスCF
resource "aws_cloudfront_distribution" "react_hp_distribution" {
  origin {
    domain_name = local.hp_origin_domain_name
    origin_id   = local.hp_origin_domain_name

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
      origin_keepalive_timeout = 5
      origin_read_timeout      = 30
    }
  }

  enabled         = true
  is_ipv6_enabled = true
  aliases         = ["www.${local.domain_name}"]
  price_class     = "PriceClass_200"
  web_acl_id      = "arn:aws:wafv2:us-east-1:${var.aws_account_id}:global/webacl/AWSWAF-www-YutaHanda-HP/1b1afa44-f2e7-466e-8b08-da52cc561e79"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.hp_origin_domain_name
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:${var.aws_account_id}:certificate/f8ac1a96-6a12-4403-8374-9275745c7971"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    key = "react_hp_distribution"
  }
}

# wwwナシをwwwアリにリダイレクトするためのCloudFront
resource "aws_cloudfront_distribution" "redirect_distribution" {
  origin {
    domain_name = local.origin_domain_name
    origin_id   = local.origin_domain_name

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
      origin_keepalive_timeout = 5
      origin_read_timeout      = 30
    }
  }

  enabled         = true
  is_ipv6_enabled = true
  aliases         = [local.domain_name]
  price_class     = "PriceClass_200"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.origin_domain_name
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    cache_policy_id        = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:${var.aws_account_id}:certificate/f8ac1a96-6a12-4403-8374-9275745c7971"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    "key" = "redirect_distribution"
  }
}
