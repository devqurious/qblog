---
title: "Control a solenoid using python"
date: 2021-07-02T16:45:23+05:30
thumb_image: "/images/experiments/solenoid.jpeg"
draft: false
tags: ["Electricity", "Experiments"]
categories:
- Activities
---

# Solenoid Valve

### Introduction

![](/images/electronics/attachments/Pasted%20image%2020210704060129.jpeg)

A valve is a device that controls the flow of a fluid. It does so by either blocking the passage, or unblocking it. A solenoid valve uses electromagnetism to block, or unblock the flow of the fluid material. A coil of wire inside the solenoid valve becomes "magnetized" when current passes through it. This pulls in the "plunger" and opens up the passage. When current stops flowing through the coil, the magnetism is lost, and the plunger goes back to it's normal blocking position.

These devices are useful for automatic fluid control. For example, you can control the above solenoid valve using a simple python program.

### Objective

We will test a solenoid, first without any water flowing through it, and then get into the wet part of the experiment, by connecting the solenoid to a tap. Finally, we attach the solenoid to the raspberry pi using a relay and programmatically turn it on and off.

### How does the solenoid work?

Watch this video for how they work, and where they are used.

{{< youtube -MLGr1_Fw0c >}}

Explore the different types of solenoid vales:
- https://tameson.com/solenoid-valve-types.html

### Prerequisite

[02-relay](/activities/02-relay)

### Parts

- 12V solenoid valve [like this one](https://www.amazon.in/gp/product/B01DUEN1CQ/ref=ppx_yo_dt_b_asin_image_o07_s00?ie=UTF8&psc=1#descriptionAndDetails). It comes with an extra pair of "connection nipples" in case you want to connect to a hosepipe with smaller diameter.
- Bench power supply.
- 5V relay module.
- Raspberry pi
- Jumper wires and alligator clips.

### Solenoid specs

- **Voltage rating**: We will use a 12V DC solenoid in this experiment, but solenoid valves come in a variety of different DC and AC voltages.
- **Power rating**: This is the power rating of the _coil_ inside the valve. From this you can derive the amount of current the valve will need. The one we use here has a 4W rating. This means it will draw about 0.3A of current (4/12 = 0.3). Amps (current consumption) = watts (power consumption of coil) divided by 12 volts.
- **MPa**: Maximum pressure in [Megapascal pressure unit](https://www.sensorsone.com/mpa-megapascal-pressure-unit/).
- **Port opening**: Size of the inlet/outlet in inches.

### Safety instructions

> Take precautions when making the electrical connections to prevent shocks. Solenoids can draw a lot of current, so proper care must be taken when conducting this experiment.

> If you are going to install the solenoid valve outdoors, be sure to protect it from the elements. Also ensure there are no extra bits of wire sticking out, and insulate everything.

### Experiment - 1: Test the solenoid valve

The solenoid is a mechanical device so it's possible to "feel" it when the valve is opened. Let's provide power to the solenoid valve and check that.

But first, observe the solenoid.

{{< youtube ZajcDkK6KVs >}}

Then connect it to a power supply.

- Calculate the current needed by the solenoid valve from the power rating.
- Set the voltage and current in the bench power supply.
- Connect the power supply to the solenoid valve.
- Hold the valve. Do you feel the plunger move when you supply power?

{{< youtube BGQ_oT35TBM >}}

Finally, attach the solenoid to a water supply. Walk around the house, if you need to. :)

{{< youtube VYOJqD6jn1o >}}

### Experiment - 2: Contol the solenoid valve using Python

##### Connect the relay
See [02-relay](/activities/02-relay) for more details on how to connect the relay, but a recap is below:
- Connect In1 to any GND pin of the Pi.
- Connect Vcc to any GPIO pin, for example, pin 16.
- Connect JDVcc to a different 5V power supply (set to a max of 70mA)
- Connect Gnd to Negative terminal of 5V power suppy

![](/images/electronics/attachments/Pasted%20image%2020210704084027.jpeg)

##### Connect the solenoid valve

Connect 12V power to one of the terminals of the solenoid valve. Connect the other terminal to the negative terminal _through the NO terminals of the relay_ as shown in the video below.

{{< youtube LYhnw2U3l_g >}}

##### Run the Python program

```python
import RPi.GPIO as GPIO
import time

in1 = 16

GPIO.setmode(GPIO.BOARD)
GPIO.setup(in1, GPIO.OUT)

try:
while True:
for x in range(5):
GPIO.output(in1, True)
time.sleep(5)
GPIO.output(in1, False)
time.sleep(5)

except KeyboardInterrupt:
GPIO.output(in1, False)
GPIO.cleanup()
```

### Glossary of terms

### Questions
- What is pressure?
- What is a latching relay, and why is it useful?

### Tags
#pressure, #electromagnetism, #solenoid,

### WIP

WIP - check back later...

Added some more note.s..

https://www.instructables.com/Motion-Sensor-Water-Tap-Using-Arduino-and-Solenoid/

https://tameson.com/solenoid-valve-types.html



Solenoid

- https://www.amazon.in/gp/product/B01AUSTHRI/ref=ox_sc_act_image_1?smid=A2YO1EOTXB6FMN&psc=1
- Model:2W-160-15
- Working Medium: Air, Water, Oil, Gas
- Operating Type: Directly driven
- State: Normally closed
- Flow bore: 16mm
- CV: 4.8
- Pipe Size: 1/2"
- Operating Viscosity: Under 20CST
- Operating Pressure: 0-10 Kg/cm?
- Working Temperature: -5~80¡æ
- Voltage: DC 12V, ¡À10%
- Valve Body: Brass
