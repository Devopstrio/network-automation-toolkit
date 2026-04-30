resource "aws_vpc" "automation_vpc" {
  cidr_block           = "10.100.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "network-automation-vpc"
    Environment = var.environment
  }
}

resource "aws_subnet" "automation_subnet" {
  vpc_id                  = aws_vpc.automation_vpc.id
  cidr_block              = "10.100.1.0/24"
  map_public_ip_on_launch = false

  tags = {
    Name = "automation-engine-subnet"
  }
}

resource "aws_security_group" "automation_sg" {
  name        = "network-automation-sg"
  description = "Allow automation engine to reach network devices via SSH/SNMP"
  vpc_id      = aws_vpc.automation_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.automation_vpc.cidr_block]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
