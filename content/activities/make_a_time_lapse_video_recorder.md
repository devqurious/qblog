---
title: "Make a time lapse video"
date: 2020-09-24T15:44:40+05:30
featured_image: "http://img.youtube.com/vi/t6TVn5iLJ5w/0.jpg"
thumb_image: "http://img.youtube.com/vi/t6TVn5iLJ5w/0.jpg"
omit_header_text: true
draft: false
categories: ["Activities"]
tags: ["Computers", "Coding"]
---

## Make a time-lapse recorder

Plants grow, we know that. But have you actually _seen one grow in front of your eyes? Me neither. So lets go about making a time lapse recorder. 

For this project you will need:

  1. A Raspberry Pi for the brains.
  2. A PiCamera
  3. A power bank battery (commonly used to charge phones)
  4. A coffee tin to hold it all together
  5. A driller (woohooo!!!)
  6. Some code to get it all going.

## Writing the code

Write and test the code out completely. Code is never quite done and even the code below, while it does the job, still has more work to be done.
    
    ```
    from picamera import PiCamera
    from os import system
    from os import path
    from time import sleep
    import time
    import sys
    
    camera = PiCamera()
    camera.framerate = 30
    
    # Wait for the automatic gain control to settle
    sleep(2)
    
    # Now fix the values
    camera.shutter_speed = camera.exposure_speed
    camera.exposure_mode = "off"
    g = camera.awb_gains
    camera.awb_mode = "off"
    camera.awb_gains = g
    
    try:
    for filename in    camera.capture_continuous("/home/pi/Projects/time_lapse/img{timestamp:%Y-%m-%d-%H-%M-%S}.jpg"):
    date_time = time.strftime("%d/%m/%Y ") + time.strftime("%H:%M:%S ")
    print(date_time + "Captured %s" % filename)
    sleep(60) # wait 1 minute
    except:
    print("Some error: ", sys.exc_info()[0])
    raise
    # Use ImageMagick to create the time-lapse video
    # system("convert -delay 10 -loop 0 img*.jpg animation.gif")
    # print("Done")
	```

There are two main aspects of the code above:

  1. Making the images look similar from an exposure standpoint.
  2. Adding the timestamp to the filenames, which helps to keep things running well even if the program dies, or the Raspberry Pi reboots.

The only other thing is some crontab magic to make sure that the program runs automatically on boot, and is restarted if it mysteriously dies.
    
	```
    * * * * * flock -xn /tmp/forever.lck -c "nohup python /home/pi/Projects/time_lapse/time_lapse.py > /home/pi/Projects/time_lapse/time_lapse.out 2>/tmp/log"
    
    
    @reboot python /home/pi/Projects/time_lapse.py > /home/pi/Projects/time_lapse/time_lapse.out
	```

The first line uses the `flock` program to check, every minute, if the Python script is running or not. If it’s not running, it runs it. The second line makes sure the Python script runs every time the Pi reboots.

That’s all the code there is to it. Now on to the fun stuff of actually making the recorder!

## Making the recorder

The hardest part is really throwing out all the coffee. But of course, if you love coffee, this won’t be that hard to do. Make sure your tin as large as your power bank.

![img-small](https://cdn-images-1.medium.com/max/800/1*moH_HX0u4H3Rxf9e0vlPCQ.jpeg)

This is the PiCamera.

![img-medium](https://cdn-images-1.medium.com/max/800/1*r-ZgyCdsc9cG3snX_lMshA.jpeg)

Decide where you will attach it and make a small marking for the lens _and the red LED light _to come through.

![img-small](https://cdn-images-1.medium.com/max/800/1*-9W2tV0EheMciX4XjtKoEg.jpeg)

Drill away. If you are doing this with a little one, this is the high point of the whole project, really. (Make sure to practice drilling on some other tin cans)

![img-small](https://cdn-images-1.medium.com/max/800/1*shRPUj9q0N4f4UaBUgONzA.jpeg)

Now comes the tricky part. Use your ingenuinity to attach the camera to the can.

![img-small](https://cdn-images-1.medium.com/max/800/1*s1dtPgYNvFajGOmL3Z30xQ.jpeg)

I used the holes on the camera PCB to tie it to the front too, for good measure. The picture also shows the second hole drilled out to display the LED.

![img-small](https://cdn-images-1.medium.com/max/800/1*pW7Dm2pbpVPhs_FwCmhrug.jpeg)

This is the power bank. You can use anyone that supplies more than 2A, and has an amperage of more than 10,000mAh so you can record over several hours.

![img-small](https://cdn-images-1.medium.com/max/800/1*zN_Gku8Xrpa_TKnUvpG2nA.jpeg)

Now put them all in the can.

![img-medium](https://cdn-images-1.medium.com/max/800/1*wC6PVuzvtHXXicFVvRDF4Q.jpeg)

Looks like a sinister little robot now. With a one-eye patch. The eye is glowing because the program is running and camera is active.

Here is the timelapse video. It was created using iMovie but you can use ImageMagick to do the same too.

{{< youtube  t6TVn5iLJ5w >}}

Space reserved for a time lapse video of a plant growing up. That was the original inspiration of this project — to show kids how plants really grow.

That’s it. You now have the power to compress several hours in a day to a few seconds. How cool is that!

## Note

The can gets hot. I’ll update this post in case my power bank, or Raspberry Pi, or both blow up. Or if I make changes to the air flow.

The inspiration for this project came from [here](http://fotosyn.com/blog/simple-timelapse-camera-using-raspberry-pi-and-a-coffee-tin), modified to include an extra hole. 🙂

