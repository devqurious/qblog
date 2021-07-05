---
title: "A simple circuit with a LED"
date: 2021-06-30T16:45:23+05:30
thumb_image: "/images/electronics/attachments/Pasted%20image%2020210619225933.jpeg"
draft: false
tags: ["Electricity", "Experiments"]
categories:
- Activities
---

### Objective

Perform a series of experiments with the LED and understand how to:
- Create a basic circuit with an LED, battery and a resistor.
- Control a LED by turning it on and off using code.
- Create a traffic light like the one shown below.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pRcRi24gDIo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Prerequisite

- Basic understanding of python programming.
- Ability to use the terminal.

You will also need to know the following:
- The pinout of your pi, by running the `pinout` command in the terminal.
- Calculate the resistance using the [resistor color code calculator](https://www.digikey.in/en/resources/conversion-calculators/conversion-calculator-resistor-color-code)
- [How to use the breadboard](https://learn.sparkfun.com/tutorials/how-to-use-a-breadboard/all)

### Parts
- 5mm LEDs of different hues: White, red, green, yellow, blue...
- 20 Ohm Resistors
- 3V and 5V volt supplies
- Jumper wires (male/female and male/male)
- Alligator clips
- Breadboard
- Raspberry pi

### Experiment 1 - LED Circuit

This is the absolute hello world of electronics. This is the circuit we're going to make:

![](/images/electronics/attachments/Pasted%20image%2020210619225815.jpeg)
[Circuit-diagram.org](https://www.circuit-diagram.org)

Use the parts to complete the circuit, and if you've done it all right, your LED should light up! Remember that the longer leg of the LED is the positive end (Anode) and the shorter one is the negative end (Cathode). If the LED does not glow, reverse the connection and try.

![](/images/electronics/attachments/Pasted%20image%2020210619225933.jpeg)

What if you wanted to display multiple LEDs, all at once? Connect them in series by connecting one LED's anode to another's cathode...but you need to make sure you supply the correct voltage as well - For each LED, provide 3V.

![](/images/electronics/attachments/Pasted%20image%2020210619232059.jpeg)
[Circuit-diagram.org](https://www.circuit-diagram.org)


Experiment with...

- Different LEDs.
- Different resistances.
- Without the resistor.

The resistor is there to limit the amount of current flow through the LED, but with just 3V you might be able to get this to work even without the resistor, and get a brighter glow too.

This experiment can be understood using a fundamental law of Kirchoff - that the voltage increase should match the volage decrease in a circuit. Then everything is perfectly balanced!

![](/images/electronics/attachments/Pasted%20image%2020210618225754.jpeg)


### Experiment 2 - LED Control using GPIO

The pi foundation has a wonderful set of tutorials for using the GPIO pins in the pi that builds up gradually.

From using the pi to light a LED...

![](/images/electronics/attachments/Pasted%20image%2020210619230727.jpeg)

To traffic lights and more!

<iframe width="560" height="315" src="https://www.youtube.com/embed/tVfhTfQUKWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Follow the experiments at: https://projects.raspberrypi.org/en/projects/physical-computing.

### What is a LED?

LED stands for light emitting diode, although some folks also call it as light emitting device. From it's name it's pretty evident that the main purpose of the LED...is to light up!

> Light is produced when electrons and "holes" ([01-led#How-does-a-LED-work](#How-does-a-LED-work) ) combine together in the semiconductor material.

Some characeteristics of a LED are mentioned below:

** 5mm LED **

5mm refers to the diameter of the size of the head of the LED. You can also get LEDs with 3mm and 8mm head sizes.

** Electrical characteristics **

| Name               | Explanation            | Unit  | Typical Values |     |
| ------------------ | ---------------------- | ----- | -------------- | --- |
| Forward Voltage    | Needed to glow the LED | Volts | 3V, 5V         |     |
| Nominal Current    | Max allowable current  | Amps  | 20mA           |     |
| Luminous intensity | Brightness levels      | mcd   | 150-200mcd     |     |
|                    |                        |       |                |     |

Forward voltage varies from 1.8V to 4V depending on color.

| Color | Forward Voltage |
| ----- | --------------- |
| Red   | 1.5V            |
| Amber | 1.8V            |
| Green | 2.0V            |
| Blue  | 3.0V            |
| White | 4.0V            |

** Materials used **

Different types of material are used to create different colors.

![](/images/electronics/attachments/Pasted%20image%2020210620154618.jpeg)
[Src](https://www.electronics-tutorials.ws/diode/diode_8.html)

### How does a LED work? {#How-does-a-LED-work}
The LED has a piece of material specifically created to have have "holes" and "electrons". A "hole" is a where an electron used to be, but does not exist right now. And an "electron" here refers to an "extra" electron that's been added in through a process called "doping". Under normal circumstances, the holes and electrons stay apart because of an electric field between them that keeps them apart.

![](/images/electronics/attachments/Pasted%20image%2020210619211604.jpeg)
[Src](https://www.upsbatterycenter.com/blog/led/#prettyPhoto/0/)

By applying some forward voltage, you can push some of the electrons towards the holes, and vice versa. When an electron takes the place of a hole (which happens at the p-n junction), the electron moves into a lower energy state, causing it to give off some of it's excess energy. This "energy" is electromagnetic radiation, given off in the form of photons. If amount of energy released is less, the color we see is red. If the amount of energy released is high, it will appear blue. (Of course, here less and more are just relative terms)

This can also be explained from a "wave" standpoint. Light is a combination of different wavelengths (corresponding to different energy levels). Now when the electrons move into holes, they emit waves of different wavelengths, depending on the amount of energy released. [This site gives a nice list of colors, by wavelength](http://pages.cs.wisc.edu/~yetkin/code/wavelength_to_rgb/wavelength.html).

### Benefits of LED

Before LEDs came along, the world was lit by Edison's light bulb - which created light, but also generated a lot of heat which was wasteful use of energy. LEDs can generate light, without causing much heat and therefore use much less energy when doing their business of lighting up our lives.

Less wasted energy means less plundering of the natural resources which means an Earth that can last longer.


### History (and colors) of LED

First, there was the red LED. Then green, and then after a 30 year gap, the blue LED. It was the last to be manufactured, and it was the one that finally enabled "White light!"

<iframe width="560" height="315" src="https://www.youtube.com/embed/idwKHQEw78g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- The [elements](https://www.ledsmagazine.com/leds-ssl-design/materials/article/16701292/what-is-an-led) used to create differently colored LEDs.

### Schematic and Datasheets

![](/images/electronics/attachments/Pasted%20image%2020210618230851.jpeg)
- https://cdn-shop.adafruit.com/datasheets/WP7113SRD-D.pdf
- https://www.vishay.com/docs/83171/tlur640.pdf

### More information

- [How LEDs are made](http://www.madehow.com/Volume-1/Light-Emitting-Diode-LED.html)
- [The Nobel Prize for the Blue LED](https://www.nobelprize.org/prizes/physics/2014/press-release/)
- [LED under a microscope](https://www.youtube.com/watch?v=ybf4stl7k94&t=824s)

### In Pictures

![](/images/electronics/attachments/Pasted%20image%2020210620122050.jpeg)
[Nobelprize.org](https://www.nobelprize.org/uploads/2018/06/diode.pdf)

![](/images/electronics/attachments/Pasted%20image%2020210620122216.jpeg)
[Nobelprize.org](https://www.nobelprize.org/uploads/2018/06/efficiency.pdf)

### Glossary, links and search terms

Terms

| Term          | Explanation                         |
| :------------- | :----------------------------------- |
| mcd           | Milicalendela, measures lumimousity |



### Questions

- Does the color of the LED change with different voltages applied across the terminals?

With 3V
![](/images/electronics/attachments/Pasted%20image%2020210619103049.jpeg)

With 6V
![](/images/electronics/attachments/Pasted%20image%2020210619103125.jpeg)

- Why does the RED LED not glow when connected to 5V power supply, but glows brightly when connected to the 3V power supply?
- What is the resistance of the LED diode, if any?
- Why do blue LED need more voltage?
- Why is gallium nitride used?






