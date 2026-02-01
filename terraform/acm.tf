resource "aws_acm_certificate" "react_hp_acm_certificate" {
  provider = aws.us_east_1

  domain_name               = "*.${local.domain_name}"
  subject_alternative_names = [local.domain_name]
  validation_method         = "DNS"

  tags = {
    Name = "react-hp-acm-certificate"
  }

  lifecycle {
    create_before_destroy = true
  }
}