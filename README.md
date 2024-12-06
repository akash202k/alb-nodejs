# alb-nodejs
This is simple nodejs project used to demonstrate load balancing. it return server public and private ip on which this project hosted .


## Assignment

# Level : 1

> Create two Ec2 with type t2.micro, install required packages like nodejs using nvm , install pm2 to run nodeJs application in background.
> Create target group and register target group with ec2 instance
> Create load balancer and attach it to ec2 instance
> Create security group and allow inbound traffic on port application port

# Level : 2

> create image from one of ec2 instance in which above application is running 
> create launch template with above  created image in above step
> create auto scalling group with above launch template and target group( with target group created in Level : 1 )
> now delete older vm and check auto scallign will launch new ec2 . 


# Level : 3

> route traffic to load balancer using route53
> create ssl certificate with aws acm service 
> route traffic from http to https


# Outcomes

# Level : 1
> Able to access application on public ip of load balancer dns.
> load balancing working properly

# Level : 2

> Able to create auto scaling group with launch template and target group
> Auto-scaling working properly along with load balancers & able to scale-in and scale-out instances .

# Level : 3

> Able to route traffic from http to https using ssl certificate
> Able to access application with custom domain over https and everything is working properly.
