---
title: "5-DOF Robot Arm"
image: "/assets/images/projects/5-DOFRobotArm/0.png"
members: ""
description: "Smart home control system using ESP32 and IoT technology."
date: 2025-09-10
---

The 5-DOF Robot Arm is an educational robotic system designed to replicate human arm movements with precision, suitable for industrial pick-and-place demonstrations and training purposes.

## Technical Overview

The arm is operated using a custom Python-based GUI with real-time 3D visualization, manual and sequence control, and motion recording/playback.

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8 not-prose">
  <img src="{{ site.baseurl }}/assets/images/projects/5-DOFRobotArm/0.png" alt="Soccerbot Action" class="rounded-md object-cover shadow-lg border border-gray-800 hover:border-recOrange transition-colors">
  <img src="{{ site.baseurl }}/assets/images/projects/5-DOFRobotArm/1.png" alt="Soccerbot Action" class="rounded-md object-cover shadow-lg border border-gray-800 hover:border-recOrange transition-colors">
</div>

The project integrates:

- Six servo motors—three MG996R high-torque servos for the base, shoulder, and elbowelbow.

- Three SG90 micro servos for the wrist and gripper—into a lightweight PLA 3D-printed structure 

The control solution employs a dual-ESP32 architecture: 

- One microcontroller handles precise servo control via PWM

- The other monitors system performance through five INA219 current sensors 
