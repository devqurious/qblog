---
title: "Part 7: Install K3s on master node"
date: 2020-12-10T08:10:51+05:30
thumb_image: "/images/pi/K3s.png"
omit_header_text: true
draft: false
tags: ["homecloud", "computers"]
---

Finally, we're ready to install K3s on the master node. First step is to update a /boot/firmware/cmdline.txt (*not* /boot/cmdline.txt) as some sites mention. Add the first two parameters (cgroup_memory and cgroup_enable) as shown below.

```
cgroup_memory=1 cgroup_enable=memory net.ifnames=0 dwc_otg.lpm_enable=0 console=serial0,115200 console=tty1 root=LABEL=writable rootfstype=ext4 elevator=deadline rootwait fixrtc
```

Reboot, and then run the following command `cat /proc/cmdline` to verify that the updated parameters are in effect.

```
ubuntu@ubuntu:~$ cat /proc/cmdline 
 coherent_pool=1M 8250.nr_uarts=1 snd_bcm2835.enable_compat_alsa=0 snd_bcm2835.enable_hdmi=1 snd_bcm2835.enable_headphones=1 bcm2708_fb.fbwidth=0 bcm2708_fb.fbheight=0 bcm2708_fb.fbswap=1 smsc95xx.macaddr=DC:A6:32:D4:4D:B2 vc_mem.mem_base=0x3ec00000 vc_mem.mem_size=0x40000000  cgroup_memory=1 cgroup_enable=memory net.ifnames=0 dwc_otg.lpm_enable=0 console=ttyS0,115200 console=tty1 root=LABEL=writable rootfstype=ext4 elevator=deadline rootwait fixrtc quiet splash
```

Now install K3s. 

```
curl -sfL https://get.k3s.io | sh -
```

Amazingly, that's all there is to it. The above command will download the stable version of K3s and then run a script to install it on the pi. Once it is done, verify:

```
ubuntu@ubuntu:~$ sudo kubectl get nodes
NAME     STATUS   ROLES    AGE    VERSION
ubuntu   Ready    master   133m   v1.19.4+k3s1
```

To uninstall:

```
sudo /usr/local/bin/k3s-uninstall.sh
```
