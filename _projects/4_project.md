---
layout: page
title: BRAVA - Boiling Flow CFD for Nuclear Fuel Assemblies
description: CFD simulation development for boiling flows in nuclear fuel assemblies
img: assets/img/publication_preview/BRAVA.png
importance: 4
category: work
status: Ongoing
related_publications: true
---

The BRAVA project, sponsored by SwissNuclear, develops CFD simulation capabilities for boiling flows in nuclear fuel assemblies. Boiling is a multi-scale problem: individual bubbles form and detach at the heated rod surface, while safety questions concern the void distribution across a whole fuel assembly.

## Eulerian Simulations

At the assembly scale the project uses an Eulerian approach, which predicts space- and time-averaged void fraction. It is efficient enough to simulate entire fuel assemblies.

## Interface-Resolved Simulations

Eulerian models rely on closure relations for wall boiling and interfacial heat transfer. Interface-resolved simulations compute phase change directly from the temperature field at the bubble interface, without empirical closures, which makes them a way to study these mechanisms from first principles. I am developing a sharp-interface VOF method for this that works on unstructured polyhedral meshes {% cite krenSharpInterfaceVOF2026 krenHighFidelityBoiling2025 %}.

## Validation

- DEBORA boiling benchmark
- 2×2 and 3×3 fuel rod bundle configurations
- Conditions representative of nuclear power plant operation

## Applications

- Safety analysis for nuclear facilities
- Operational parameter optimization
- T-Flows code enhancement

## Funding

**Sponsor**: SwissNuclear
