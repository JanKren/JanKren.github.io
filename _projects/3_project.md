---
layout: page
title: Interface Tracking Algorithms for Multiphase Flow Analysis
description: Development of advanced algorithms for large interface tracking in air-water slug flows
img: assets/img/publication_preview/TaylorSim.jpeg
importance: 3
status: Finished
category: work
---

This project focuses on developing sophisticated image processing and interface tracking algorithms for analyzing two-phase flow experiments. The work addresses the challenge of automatically classifying and tracking gas-liquid interfaces in high-speed experimental data, providing essential tools for validation of computational fluid dynamics simulations.

## Project Background

Two-phase flow experiments generate vast amounts of data that require automated classification and analysis. Traditional manual analysis methods are time-consuming and subject to human error. This project developed robust algorithms to differentiate between liquid and gas phases while tracking interface dynamics with high precision.

## Algorithm Development

### Large Interface Tracking

- **High-sensitivity detection** of bubble interfaces from experimental images
- **Automated phase classification** for liquid and gas regions
- **Temporal tracking** of interface evolution in turbulent flows
- **Statistical analysis** of interface characteristics and dynamics

### Key Innovations

- **Robust edge detection** algorithms capable of handling noise and lighting variations
- **Multi-frame analysis** for tracking interface motion and deformation
- **Automated quality control** to identify and flag problematic data
- **Integration capabilities** with CFD simulation data for validation

## Applications and Results

### Experimental Support

The algorithms were successfully applied to analyze air-water slug flow experiments, providing:

- **Quantitative interface velocities** and acceleration measurements
- **Bubble size distributions** and shape characterization
- **Interface roughness analysis** for surface tension studies
- **Flow regime identification** based on interface characteristics

### CFD Validation

The processed experimental data enabled detailed validation of computational simulations:

- **Direct comparison** between experimental and simulated bubble shapes
- **Interface dynamics verification** for numerical model assessment
- **Quantitative metrics** for simulation accuracy evaluation

## Technical Implementation

### Image Processing Pipeline

- **Preprocessing**: Noise reduction and contrast enhancement
- **Segmentation**: Advanced thresholding and region growing algorithms
- **Feature Extraction**: Geometric and dynamic interface properties
- **Post-processing**: Statistical analysis and quality assurance

### Performance Characteristics

- **High throughput**: Capable of processing thousands of images per hour
- **Accuracy**: Sub-pixel interface detection precision
- **Robustness**: Handles varying lighting and optical conditions
- **Scalability**: Adaptable to different experimental configurations

## Impact and Applications

This work supports:

- **Experimental fluid dynamics** by providing automated analysis tools
- **CFD validation studies** through precise interface measurements
- **Flow regime mapping** for industrial applications
- **Algorithm development** for multiphase flow research

The algorithms have been utilized in multiple research projects, significantly reducing analysis time while improving measurement accuracy and consistency.

## Publications

{% cite krenLargeInterfaceTracking2021 %}
{% cite zajecTurbulentFlowConfined2021 %}
