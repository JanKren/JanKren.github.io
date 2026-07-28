---
layout: page
title: DNS vs. LES for Nuclear Thermal Hydraulics
description: Comparative analysis of turbulent heat transfer in square duct with heated foil boundary conditions
img: assets/img/publication_preview/DNSLESCoherent.jpg
importance: 2
category: work
status: Finished
---

This project investigates turbulent heat transfer in a square duct configuration where a finite section of a single duct boundary is heated with an infinitely thin foil. The research compares Direct Numerical Simulation (DNS) and Large Eddy Simulation (LES) approaches to understand their relative accuracy and computational efficiency for nuclear thermal hydraulics applications.

## Motivation and Background

Temperature fluctuations at heated surfaces in turbulent flows are critical for nuclear reactor safety analysis. Understanding these phenomena requires accurate prediction of near-wall thermal boundary layer behavior, which presents significant challenges for computational methods. This work addresses the fundamental question of when LES can reliably replace DNS for thermal hydraulics calculations.

## Research Objectives

- **Method Validation**: Compare DNS and LES-WALE model predictions for thermal boundary layer behavior
- **Accuracy Assessment**: Quantify differences in temperature statistics and fluctuation predictions
- **Computational Efficiency**: Evaluate the cost-benefit trade-offs between high-fidelity DNS and practical LES
- **Design Support**: Provide guidance for experimental design in thermal hydraulics research

## Key Results

### Temperature Prediction Differences

Our analysis revealed **20% higher foil temperatures and temperature fluctuations** in LES results compared to DNS. This systematic difference has important implications for reactor safety analysis where accurate temperature prediction is crucial.

### Near-Wall Model Behavior

Detailed analysis of the LES-WALE model's near-wall behavior explained the observed discrepancies. The study demonstrated that **LES-WALE yields highly accurate results only with finely resolved meshes**, where computational costs may approach those of DNS.

### Computational Cost Analysis

The research provided quantitative assessment of computational resource requirements, showing that for accurate thermal predictions, LES mesh refinement requirements significantly reduce the expected computational savings over DNS.

## Methodology

### Numerical Setup

- **Code**: OpenFOAM with second-order accurate schemes
- **Approach**: Passive scalar approximation for thermal transport
- **Boundary Conditions**: Constant heat flux at heated foil section
- **Reynolds Number**: 10,000 (fully developed turbulent flow)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/DNSLESGeometry.png" title="DNS vs LES computational geometry" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Computational geometry showing square duct configuration with heated foil boundary section for DNS vs LES comparison
</div>

### Comparative Framework

- **DNS**: High-resolution reference solution capturing all turbulent scales
- **LES**: Wall-Adapting Local Eddy-viscosity (WALE) subgrid-scale model
- **Mesh Sensitivity**: Systematic grid refinement studies for both methods

## Applications and Impact

This research directly supports:

- **Nuclear reactor thermal analysis** by providing method accuracy guidelines
- **Experimental design** for heated foil thermometry studies
- **CFD code validation** for nuclear thermal hydraulics applications
- **Computational resource planning** for industrial simulations

## Experimental Connection

The computational work supported the design and analysis of experiments in the THELMA laboratory at Jožef Stefan Institute, providing critical insights for interpreting thermal fluctuation measurements and optimizing experimental parameters.

## Publications

{% cite krenDNSVsTurbulent2024 %}
{% cite tiseljInvestigationTurbulentFlow2021 %}
{% cite krenDNSSQUAREDUCT2022 %}
