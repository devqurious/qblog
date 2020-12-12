---
title: "Part 4: Configure IP address"
date: 2020-12-07T08:10:51+05:30
thumb_image: "/images/pi/Ipv4_address-it.png"
omit_header_text: true
draft: false
tags: ["homecloud", "computers"]
---

By default, the OS will assign a DHCP IP address to the node. But dynamically changing IP addresses are not a good idea when it comes to servers. To provide a static IP address, we need to do two things. 

![](/images/pi/dhcp_range.png)

First, ensure that the static IP address is outside the range used by the DHCP server. 

Second, assign a static IP address. This can be surprisingly hard with the new 'netplan' approach, and there is a lot of mis-information out there. Use https://graspingtech.com/ubuntu-server-18.04-static-ip/ to set this correctly. 

Now, you should be able to ping the pi from all the other machines on your network. 