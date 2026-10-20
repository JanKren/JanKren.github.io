---
layout: page
title: Interface Tracking Algorithms for Multiphase Flow Analysis
description: Image-processing algorithms that locate Taylor bubble interfaces in PIV-LIF and shadowgraphy images
img: assets/img/publication_preview/TaylorExp.jpg
importance: 3
status: Finished
category: work
related_publications: true
---

The Taylor bubble experiments at the Jožef Stefan Institute record a bubble held in place by a downward water flow with a high-speed camera. Before velocity fields can be averaged around the bubble, or its interface compared with simulations, every image has to be split into gas and liquid. In a vertical pipe this is hard: light reflected from the air–water interface is deformed by refraction through the pipe wall and the water, so the signal-to-noise ratio is low.

## PIV-LIF Images: Dynamic Masking

Particle Image Velocimetry with Laser Induced Fluorescence (PIV-LIF) needs a dynamic mask that separates the gas phase from the seeded liquid. I developed two algorithms for this:

- **Summation algorithm**: uses the high seeding density of the images and builds a mask around the brighter particles
- **Maximum algorithm**: uses the higher seeding density at the bubble nose and trailing edge

Both were tested on datasets with different bubble lengths, image resolutions and seeding densities. Both locate the bubble nose and trailing edge reliably, and the summation algorithm is the more robust of the two because it depends less on its settings. Neither reconstructs the full bubble shape accurately enough. The Python code and a small test dataset are available in the [project repository](https://repo.ijs.si/kren/large-interface-tracking-algorithm).

## Shadowgraphy Images: Interface Reconstruction

For bubble shape and interface dynamics the experiments also use shadowgraphy, where dedicated reconstruction algorithms turn each high-speed frame into a bubble contour.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/TaylorExp.jpg" title="Interface recognition on a shadowgraphy image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Interface recognition on a shadowgraphy image of a Taylor bubble: (a) raw image, (b) processed image, (c) extracted bubble contour, (d, e) close-ups of the detected interface points.
</div>

The reconstructed contours showed:

- **Bubble shape**: an asymmetric, bullet-train shape in fully turbulent flow (Re = 5600), but an axisymmetric bubble in transitional flow (Re = 1400)
- **Interface waves**: disturbance waves travelling along the interface, tracked with enough sensitivity to resolve their correlated motion across the bubble surface
- **Simulation benchmarks**: measured shapes and bubble speeds for comparison with VOF simulations in OpenFOAM and front-tracking simulations in TrioCFD

## Results

The algorithms and the results above are published in {% cite krenLargeInterfaceTracking2021 krenDynamicsTaylorBubble2023 tiseljExperimentalNumericalTaylor2025 %}.
