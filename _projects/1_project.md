---
layout: page
title: Taylor Bubble Dynamics in Counter-Current Turbulent Flow
description: Numerical and experimental investigation of Taylor bubble breakup and interface dynamics using LES and VOF methods
img: assets/img/publication_preview/TaylorSim.jpeg
importance: 1
category: work
status: Finished
related_publications: true
---

This research investigates the dynamics of Taylor bubbles in vertical counter-current turbulent flows. The work combines high-fidelity Large Eddy Simulation (LES) with experimental validation to understand bubble breakup mechanisms and interface behavior.

## Project Overview

Taylor bubbles are large gas structures that form in vertical pipes during slug flow regimes. Understanding their behavior in counter-current flow is crucial for nuclear reactor safety, particularly in emergency core cooling scenarios. The project combined simulations and experiments of a bubble held stationary by a downward liquid flow, which makes it possible to observe breakup and interface dynamics over long periods.

## Key Findings

### Bubble Shape Evolution

Experiments showed that the bubble shape depends on the flow regime:

- **Transitional flow (Re = 1400)**: axisymmetric bubbles
- **Fully turbulent flow (Re = 5600)**: asymmetric, bullet-train-shaped bubbles

### Secondary Vortex in the Wake

The high-resolution simulations show a **secondary vortex** in the turbulent wake region behind the bubble, which had not been reported for counter-current Taylor bubble flows. It is most prominent at finer mesh resolutions.

### Interface Wave Dynamics

Interface tracking on high-speed camera images captured disturbance waves along the bubble interface with amplitudes of 10–100 μm. The waves move in a correlated way across the bubble surface.

<div class="row">
    <div class="col-sm-8 mx-auto mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/TaylorSim.jpeg" title="Simulated and experimental Taylor bubbles" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Simulated Taylor bubbles in counter-current flow, coloured by the liquid velocity U<sub>x</sub>, next to an experimental image of the bubble (right).
</div>

## Computational Methods

### Numerical Framework

- **Solver**: Modified OpenFOAM with enhanced VOF capabilities
- **Time Integration**: High-order Diagonally Implicit Runge-Kutta (DIRK) schemes
- **Interface Reconstruction**: Piecewise Linear Interface Calculation (PLIC) method
- **Turbulence Modeling**: Wall-Adapting Local Eddy-viscosity (WALE) model

### Method Comparison

A comparison of algebraic and geometric interface capturing in the transitional regime (Re = 1400) showed that **geometric reconstruction predicts bubble breakup more accurately**.

## Impact and Applications

This research supports:

- **Nuclear reactor safety analysis** for emergency cooling scenarios
- **Multiphase flow prediction** in vertical pipes and channels
- **Interface tracking method development** for complex geometries
- **Understanding of turbulent wake structures** in multiphase systems

## Results

The findings above are published in {% cite krenNumericalStudyTaylor2024 krenDynamicsTaylorBubble2023 tiseljExperimentalNumericalTaylor2025 krenTaylorBubbleBreakup2024 tiseljCapillaryWavesTaylor2025 %} and in my PhD thesis {% cite krenDynamicsTaylorBubble2024 %}.
