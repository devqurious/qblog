---
title: "Test a relay"
date: 2020-09-24T15:44:40+05:30
featured_image: "/images/experiments/IMG_0204.jpg"
thumb_image: "/images/experiments/IMG_0204.jpg"
omit_header_text: true
draft: false
categories: ["Activities"]
tags: ["Electricity", "Experiment"]

---

## Testing an electromechanical relay

A brand new set of electromechanical relays arrived yesterday. This is a quick guide on how to test a relay. First, a physical inspection of the relay. There are 5 pins underneath the body. 

![img-medium](/images/experiments/IMG_0204.jpg) 

The sketch below shows what each of the pins are meant for. The top row has three pins. The middle one is the common** (CO)** pin, and on either end are the ends of the electromagnet that sits inside relay. They are labeled coil ground **(CG)** and coil control **(CC)**. The bottom row contains the normally open** (NO)**, and normally closed** (NC)** switches. We'll see what this means shortly. 

![img-small](/images/experiments/electromechanical_relay.png) 

Now, we will test the relay using a multimeter. 

## Test the coil resistance

Set the multimeter setting to measure resistance (ohms) and then connect the leads to both ends of the electromagnet (i.e **CC** and **CG**). The multimeter should read out the resistance of the coil. The one I measured had about 700 ohms of resistance. 

## Test the NC terminal 

Next, connect one lead to the **CO** terminal and the other to the **NC** terminal. There should be hardly any resistance, the multimeter should read something close to 0 ohms. 

## Test the NO terminal

Finally, connect one lead to the **CO** terminal and the other to the **NO** terminal and the multimeter should show an extremely high resistance (in Mega Ohms) since the circuit is open and that's what we expect. 

## Test the electromagnet

Next, we test, if the switch inside is working properly. To do so, mount the relay on a breadboard and provide power to the relay by connecting one of the terminal of the electromagnet to +ve and the other to the -ve terminals of a battery. In the picture, we have used a 6V battery connected to the relay. 

![img-small](/images/experiments/IMG_0216.jpg) 

When this battery is connected to the relay, you should hear a distinct "click". That's the switch inside, which is now closing the circuit inside using the NO terminal now, instead of the NC terminal. 

![img-medium](http://img.youtube.com/vi/O1D_vd-mFJ4/0.jpg)

[Click here to play the above video](https://youtu.be/O1D_vd-mFJ4) 

## Test the NC circuit

Now, let's test the NC circuit a bit more - let's see if current flows through the NC terminal and lights up a LED when the coil is **not **active, i.e. no current is flowing through the coil. When the coil is active, i.e. current is flowing through the coil, the LED should **not** glow. The resistor in the circuit is introduced to limit the amount of current flowing through the LED so that the LED does not blow up! This is how the circuit. Follow the flow of electricity from +6v to the ground (or 0v) 

![img-medium](/images/experiments/relay_test.png) 

You should have a basic understanding of using a breadboard in order to make these connections. If all the pins of the relay don't sit well on the breadboard, you may need to IMG_0204.jpg or more pins to a male wire so that you can place it correctly. 

![img-medium](http://img.youtube.com/vi/KfXIqXPK_50/0.jpg)

[Click here to play the above video](https://youtu.be/KfXIqXPK_50) 


## Test the NO and NC terminals together 

Now connect another LED to the **NO** terminal, and make the coil go active by passing current through it. Watch the switch! 

![img-medium](http://img.youtube.com/vi/ac0B3ilFwkk/0.jpg)

[Click here to play the above video](https://youtu.be/ac0B3ilFwkk) 

In the above video you can clearly see the corresponding LED light up, depending on whether current is flowing through it, or not. 

We can now confirm that we have a good, working electromechanical relay. Now, put it to some use!