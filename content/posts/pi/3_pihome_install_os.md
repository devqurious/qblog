---
title: "Part 3: Installing the the OS"
date: 2020-12-06T08:10:51+05:30
thumb_image: "/images/pi/Ubuntu.jpg"
omit_header_text: true
draft: false
tags: ["homecloud", "computers"]
---

Insert the sdcard into the Macbook Pro. 

- Install the [Balena Etcher](https://www.balena.io/etcher/) program.
- Download the [Ubuntu 20.04 OS image](https://ubuntu.com/download/raspberry-pi) for RPi (depends on model).
- Use the Etcher program to flash the SD card. 
- Connect the RPi to a monitor, keyboard and mouse and network.
- Checked the IP address. 
- Disconnect and connect via SSH (SSH server is enabled by default)
- Update the OS

```
sudo apt-get update
sudo apt-get upgrade
```
