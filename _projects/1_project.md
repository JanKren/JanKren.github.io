---
layout: page
title: Taylor Bubble Dynamics in Counter-Current Turbulent Flow
description: Advanced numerical investigation of Taylor bubble breakup and interface dynamics using LES and VOF methods
img: assets/img/publication_preview/TaylorExp.jpg
importance: 1
category: work
status: Finished
related_publications: true
---

This research investigates the complex dynamics of Taylor bubbles in vertical counter-current turbulent flows using advanced computational fluid dynamics techniques. The work combines high-fidelity Large Eddy Simulation (LES) with experimental validation to understand bubble breakup mechanisms and interface behavior.

## Project Overview

Taylor bubbles are large gas structures that form in vertical pipes during slug flow regimes. Understanding their behavior in counter-current flow is crucial for nuclear reactor safety, particularly in emergency core cooling scenarios. This project developed novel numerical methods to capture the intricate physics of bubble-liquid interactions.

## Key Findings

### Bubble Shape Evolution

Our simulations revealed distinct bubble morphologies depending on flow conditions:

- **Transitional flow (Re = 1400)**: Axisymmetric, bullet-train shapes
- **Turbulent flow (Re = 5600)**: Asymmetric deformation with pronounced wake structures

### Secondary Vortex Discovery

A novel finding from our high-resolution simulations was the identification of **secondary vortex formation** in the turbulent wake region behind Taylor bubbles. This phenomenon becomes prominent at finer mesh resolutions and represents a new contribution to understanding counter-current flow physics.

### Interface Wave Dynamics

Advanced interface tracking algorithms captured microscale disturbance waves along bubble interfaces with amplitudes ranging from 10-100 μm. These waves exhibit correlated movement patterns across the bubble surface, providing new insights into surface tension effects in turbulent flows.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/TaylorSim.jpeg" title="Experimental Taylor bubble interface waves" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Experimental visualization of Taylor bubble interface showing microscale wave dynamics in counter-current turbulent flow
</div>

## Computational Methods

### Numerical Framework

- **Solver**: Modified OpenFOAM with enhanced VOF capabilities
- **Time Integration**: High-order Diagonally Implicit Runge-Kutta (DIRK) schemes
- **Interface Reconstruction**: Piecewise Linear Interface Calculation (PLIC) method
- **Turbulence Modeling**: Wall-Adapting Local Eddy-viscosity (WALE) model

### Method Comparison

Systematic comparison between algebraic and geometric interface capturing techniques demonstrated the **superior accuracy of geometric reconstruction** for bubble breakup prediction, particularly in transitional flow regimes.

## Impact and Applications

This research directly supports:

- **Nuclear reactor safety analysis** for emergency cooling scenarios
- **Multiphase flow prediction** in vertical pipes and channels
- **Interface tracking method development** for complex geometries
- **Understanding of turbulent wake structures** in multiphase systems

## Publications

{% cite krenNumericalStudyTaylor2024 %}
{% cite krenDynamicsTaylorBubble2023 %}
{% cite tiseljExperimentalNumericalStudy2024 %}
