resource "aws_iam_role" "automation_role" {
  name = "network-automation-toolkit-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_policy" "network_access_policy" {
  name        = "NetworkProvisioningPolicy"
  description = "Policy for network automation toolkit to manage VPCs and security groups"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "ec2:CreateVpc",
          "ec2:DeleteVpc",
          "ec2:CreateSubnet",
          "ec2:CreateSecurityGroup",
          "ec2:AuthorizeSecurityGroupIngress",
          "ec2:DescribeInstances"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_network_policy" {
  role       = aws_iam_role.automation_role.name
  policy_arn = aws_iam_policy.network_access_policy.arn
}
