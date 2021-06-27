---
title: "Turn a wheel programmatically"
date: 2020-09-24T15:44:40+05:30
featured_image: "/images/experiments/fi_simple_dc_motor.jpg"
thumb_image: "/images/experiments/fi_simple_dc_motor.jpg"
omit_header_text: true
draft: false
categories: ["Activities"]
tags: ["Electricity", "Computers"]
---

## Write a program to control a motor

> “I shall, in due time, be a Poet.” - Lady Ada Lovelace

As has always been the case, a few things had to happen in sequence before the microprocessor could arrive on the scene. First, a man named Charles Babbage had to imagine a machine so powerful, it could do almost anything you wanted it to. It would be powered by steam (steam engines were all the rage back then) and he called it the “Analytical Engine”. Of course, he never built it, but the seeds of progress had been sowed.

![img-small](https://d2mxuefqeaa7sj.cloudfront.net/s_8B45B7903B5460840B83E02C4AFE02258FC92AD24848DE2EB34A226D25B76B69_1502776698240_image.png)

Next in line was Shockley, several decades later who discovered the strange properties of sand. That you could control the flow of electrons based on a threshold voltage within the sand particle. He called it the “Transistor” because it wasn’t just a resistor, or just a transferor (of electrons), it was both depending on the condition. And finally, along came Gordon Moore who took a thousand of these transistors, placed them really close to each other and connected them together in a manner that Charles Babbage had exactly imagined. And thus was born the microprocessor - the heart and soul of every computer we see today in the world.

But where does the Lady Ada Lovelace enter the picture you ask. Ah, that’s a good question. Ada Lovelace was the daughter of the famous British poet Lord Byron and Lady Byron. When she was one month old, her father, Lord Byron left the family and moved out. She was raised by her mother and grandmother in a strict setting since her mother did not want Ada to go “mad, and become another poet”. Ada was made to learn mathematics rigorously as an anti-dote to any poetic strains that might run in her veins. 

She became an accomplished mathematician and was described as an “Enchantress of numbers” by Charles Babbage who met her when she was still very young. Together they exchanged a lot of ideas about the Analytical Engine that Charles Babbage was trying to build. It is at this point, in order to prove that the engine was capable of far more complicated calculations than a simple calculator that **Ada wrote the first program**. It was a program to calculate Bernoulli’s number, a sequence of numbers used in the sums of powers (calculating the sums of numbers raised to the 2nd and 3rd and 4th powers and so on, was of great fascination to mathematicians at the time). Of course the Analytical Engine was not really built at the time, so all Ada Lovelace could do was to write the program on a piece of paper. 

![img-medium](https://d2mxuefqeaa7sj.cloudfront.net/s_8B45B7903B5460840B83E02C4AFE02258FC92AD24848DE2EB34A226D25B76B69_1503661475395_image.png)

On the extreme right are the “Result variables”, the Bernoulli’s numbers themselves that the Analytical Engine would compute once it ran the program. Decades later, such an engine would be built, and it would be proved that the program Ada Lovelace wrote was absolutely accurate. 

Ada was able to combine her flair for numbers and her internal calling for poetry and music in a manner as a true artist would. A full 150 years before it actually happened, she was able to envision “Engines” that could create music and do mechanical tasks”, such was her foresight. Ada died at the young age of 36, and requested that she be laid to rest right next to her father. So much for trying to stay away from poets and poetry. 

Today, we interact with computers using “computer languages” – languages that we can use to talk to computers. In Ada’s honour one of the earliest programming languages was called Ada. A computer program, today, and back then from the times of Ada and Charles, is simply a series of instructions executed in sequence by a computer. 

In this chapter we will write a program to prove one thing that Ada said computers would do – do mechanical work. We’ll put a small a computer (a Raspberry Pi) to work by making it spin a wheel. But let’s not just talk about it, lets start making it!

## Safety Instructions

If you notice your motor starts spinning during the process of making your connections, it means you have a short-circuit somewhere. Immediately disconnect all the wires and pray hard. You may have saved your Pi. Or not.

## What we will build

In this experiment, we will build what’s called “software” – that is, we write a computer program. When we run the program the wheels turn clockwise for 10 seconds and then stop. Just how we programmed it to!

{{< youtube xrX7fgS_PfI >}}

## Things we need

![img-small](/images/experiments/dc_motor_with_wheel.jpg)

*DC motor attached to a wheel*

![img-small](/images/experiments/9v_battery.jpg)

*9volt battery (for the motor)*

![img-small](/images/experiments/l2932_motor_driver.jpg)

*L293D micro-controller that you will “program” to drive the motor*

![img-small](/images/experiments/small_breadboard.jpg)

*A small breadboard to place the components*

![img-small](/images/experiments/jumper_wires_2.jpg)

*Male to male, and Male to female wires*

![img-small](/images/experiments/wooden_base_2.jpg)

*A wonden block to mount all parts of the experiment (optional)*

![img-small](/images/experiments/pi.jpg)

*Raspberry Pi*

Here are some pre-steps before we get on to the assembly.

1. The DC motor may not have wires connected to it. If so, you will need to solder them on to it.
	
	Get a couple of wires to connect to the motor
	
	![img-small](/images/experiments/motor_wires.jpg)

	Use the wire stripper to strip out the plastic.
	
	![img-small](/images/experiments/strip_wire.jpg)
	
	Solder the wires to the motor terminals.
	
	![img-small](/images/experiments/motor_wire_connected.jpg)
	
	The next step is important! Test that the motor works by connecting to the 9 volt 	battery.

	[Click to play](https://youtu.be/CmZzFrqC4lU)

2. You also need a monitor, keyboard and mouse that can be connected to the Raspberry Pi. And, you need to be able to power it on and boot into it. With that, you’re now ready to take the first step to controlling the motor.

3. You’ll need to know how to identify the GPIO pins. If you can get a GPIO pin out card like the one shown below, it will make making the connections a bit more simpler.

## Steps

### Step 1: Shut the Raspberry Pi down!

Before making any connections to the Pi make sure it is shut down.

### Step 2: Place the breadboard, battery, motor and wheel

Attach the motor and breadboard to the wooden block using glue. A glue gun can be very handy to do so. Now place the 9v battery on it as well and ensure that all the wires can easily reach the breadboard.

![img-medium](/images/experiments/on_wooden_base.jpg)

### Step 3: Make the connections

Mount the L293D micro-controller on the breadboard as shown below. Understand how the holes are connected to each other. In the breadboard shown below, the horizontal groups of 5 holes are connected to each other. So, if one hole is connected to ground, then the remaining 4 holes in the same row are connected to ground as well.

![img-small](/images/experiments/small_breadboard_with_line.jpg)

![img-small](/images/experiments/motor_controller_mounted.jpg)

Now make the connections using the male-to-male wires and male-to-female wires. Start with pin 1 as shown below.

![img-medium](/images/experiments/pinout.jpg)

In addition to the above connections you must also connect the GND pin on the Raspberry Pi to the ground on the breadboard to complete the circuit. The completed circuit is shown below.

![img-medium](/images/experiments/final_connnections.png)

Here are two more closeups on both sides of the connections.

![img-medium](/images/experiments/closeup1.jpg)

![img-medium](/images/experiments/closeup2.jpg)

When you’re ready, connect the power to the Raspberry Pi…and wait, nothing happens!?

![img-medium](/images/experiments/final_assembly.jpg)

### Step 4: Write and run the program

From the Raspberry Pi Menu, open Programming | Python 3 (IDLE) and then click on File | New to begin a new program. Carefully type out the program below and then save it to a file called run_motor_cw.py.
 
```
import RPi.GPIO as GPIO from time import sleep
GPIO.setmode(GPIO.BOARD)
Motor1A = 16
Motor1B = 18
Motor1E = 22
GPIO.setup(Motor1A,GPIO.OUT)
GPIO.setup(Motor1B,GPIO.OUT)
GPIO.setup(Motor1E,GPIO.OUT)
print "Turning motor on"
GPIO.output(Motor1A,GPIO.HIGH)
GPIO.output(Motor1B,GPIO.LOW)
GPIO.output(Motor1E,GPIO.HIGH)
sleep(10)
print "Stopping motor"
GPIO.output(Motor1E,GPIO.LOW)
GPIO.cleanup()
```
Now open the Terminal app on the Raspberry Pi, navigate to the location where you saved the file and run the following command: python run_motor_cw.py. At this point, your motor should start turning! 

## How does it work

When the L293D micro-controller is supplied the appropriate input commands (shown in the green arrows in the L293D pin out diagram) from the Raspberry Pi, it drives the motor that is connected to its output pins. The micro-controller does two main things:
It provides the necessary current needed to turn the motor. The Raspberry Pi’s GPIO output pins cannot supply enough current (measured in amperes) to turn a motor. 
It provides the ability to turn the motor in both directions by reversing the logic. In the previous program, simply reverse the inputs of Motor1A and Motor1B to see the motor turn counter-clockwise.

But the real master of the show here is the Raspberry Pi’s microprocessor. It’s here that the program executes and while this program simply turns the motor on and off, the genius of the microprocessor is that it can be programmed to do anything you can imagine, just like how Charles had imagined way back then. From detecting an obstacle in the path and turning the motor away from the path of a collision to drilling a hole that is exactly 1mm in dept – it’s all possible via your imagination and your code.

## Two motors!

As you can see, some pins of the L293D micro-controller as still unused. You can use them to control an additional motor. Yes, the L293D chip can control two motors at the same time. You’ll need to do a bit more research on the wiring and the code, but the principle remains the same. 

## Troubleshooting

Use a multimeter to check the battery. Is the battery able to supply 9 volts?
Check and re-check the wiring. 
Check the motor by directly connecting it to the 9v battery. Does it turn?
Check the program.

## References

https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg
https://www.youtube.com/watch?v=W7cV9_W12sM
http://www.rhydolabz.com/wiki/?p=11288
https://business.tutsplus.com/tutorials/controlling-dc-motors-using-python-with-a-raspberry-pi–cms-20051
http://www.rakeshmondal.info/L293D-Motor-Driver
http://www.fourmilab.ch/babbage/contents.html
http://blog.stephenwolfram.com/2015/12/untangling-the-tale-of-ada-lovelace/
http://mentalfloss.com/article/53131/ada-lovelace-first-computer-programmer
