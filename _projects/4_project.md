---
layout: page
title: BRAVA - Boiling Flow CFD for Nuclear Fuel Assemblies
description: Development of T-Flows and advanced CFD approaches for boiling simulations in Swiss NPP fuel assembly geometries
img: assets/img/publication_preview/BRAVA.png
importance: 4
category: work
status: Ongoing
---

The BRAVA project focuses on developing advanced CFD simulation capabilities for boiling flows in Fuel Assemblies (FAs), particularly those used in Swiss Nuclear Power Plants. This SwissNuclear-sponsored research addresses critical safety analysis needs by advancing computational methods for nuclear thermal hydraulics.

## Project Overview

CFD simulations for boiling flow in Fuel Assemblies are essential for detecting potential operational problems in nuclear reactors. The BRAVA project develops and validates multiple computational approaches to address the complex multi-scale nature of boiling phenomena in nuclear fuel geometries.

## Computational Approaches

### Three-Pronged CFD Strategy

**1. Interface Tracking Method (ITM)**
- Implemented in PSI-BOIL and T-Flows codes
- Rigorous calculation of boiling phenomena through direct interface resolution
- High-fidelity simulation of liquid-vapor interface dynamics
- Limited to smaller domains due to computational requirements

**2. Lattice Boltzmann Method (LBM)**
- Direct resolution of liquid-vapor interfaces
- Kinetic theory-based approach for multiphase flows
- Capable of capturing complex interfacial phenomena
- High computational resolution requirements

**3. Eulerian Approach (EA)**
- Space and time-averaged void fraction predictions
- Capable of simulating entire fuel assemblies
- Computationally efficient for full-scale simulations
- Enhanced with CTU-PSI model development

## Key Innovations

### Population Balance Model Integration
A novel population balance model is being integrated into the Eulerian framework:
- **Statistical representation** of multiphase flow characteristics
- **Bubble lifecycle tracking**: birth, growth, and death rates
- **Liquid/vapor ratio monitoring** throughout the domain
- **Reduced computational overhead** compared to direct bubble resolution

### Machine Learning Enhancement
- **Model parameterization** using ML techniques
- **Sensitivity analysis** for parameter optimization
- **Automated calibration** of Eulerian model parameters
- **Data-driven validation** against experimental benchmarks

## Validation Framework

### Benchmark Test Cases
- **DEBORA benchmark**: Initial validation for heated pipe boiling flows
- **Fuel bundle configurations**: 2×2 and 3×3 bundle geometries
- **Full-scale validation**: BFBT/PSBT fuel assemblies
- **Operating conditions**: Realistic NPP operational parameters

### Multi-Scale Validation Strategy
- **Full FA simulations**: Optimized model parameters for entire assemblies
- **High-resolution studies**: Detailed analysis of critical FA regions
- **Cross-validation**: Comparison between ITM, LBM, and EA approaches

## Industrial Applications

### Swiss NPP Support
- **Safety analysis enhancement** for Swiss nuclear facilities
- **Operational parameter optimization** for existing reactors
- **Design support** for fuel assembly modifications
- **Regulatory compliance** through validated simulation tools

### Code Development
- **T-Flows enhancement** for nuclear applications
- **PSI-BOIL integration** with fuel assembly geometries
- **Open-source contributions** to nuclear CFD community
- **Industrial deployment** of validated simulation tools

## Research Impact

The BRAVA project addresses critical gaps in nuclear thermal hydraulics simulation:
- **Multi-scale modeling** from microbubbles to full assemblies
- **Computational efficiency** for industrial applications
- **Validation benchmarks** for nuclear CFD codes
- **SwissNuclear collaboration** ensuring industrial relevance

## Future Directions

- **Extended validation** across diverse fuel assembly designs
- **Real-time simulation capabilities** for operational support
- **Machine learning acceleration** of computational models
- **Integration with reactor safety analysis** workflows

## Funding and Collaboration

**Sponsor**: SwissNuclear
**Partners**: Paul Scherrer Institute, Czech Technical University
**Industrial Focus**: Swiss Nuclear Power Plant applications
