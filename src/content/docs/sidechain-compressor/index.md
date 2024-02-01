---
title: "Sidechain Compressor"
description: A sidechain compressor audio worklet for web audio.
---

<iframe src=https://jadujoel.github.io/sidechain-compressor-audio-worklet/index.html style="height:800px;width:100%;border:none;"></iframe>

Full page version here: https://jadujoel.github.io/sidechain-compressor-audio-worklet/

## Introduction

An audio compression solution purpose-built for web applications. Unlike many standard Web Audio API tools, this compressor introduces sidechaining features to better meet the requirements of dynamic web audio environments.

## Understanding Sidechaining and Its Applications

Sidechaining is an audio production technique where the compression level of one audio signal is influenced by another separate audio signal. This becomes particularly valuable in contexts like game development, allowing for the background music or ambient sounds to be automatically lowered when dialogue or key sound effects are introduced. This ensures that crucial audio elements are highlighted without manual intervention.

## The Technology Behind It

### Central to the Operation: AudioWorkletNode

The Sidechain Compressor employs `AudioWorkletNode`, an advanced and efficient web audio component, to ensure smooth functionality across a broad range of modern web browsers.

### For Wider Compatibility: ScriptProcessorNode

Understanding that not all browsers are up-to-date with the latest web audio API, we've also incorporated a `ScriptProcessorNode` as a fallback option to maintain functionality across different web environments.

### User-Friendly Interface with React

The Sidechain Compressor’s UI is built with React, facilitating an intuitive and responsive control panel that enhances the user experience.

## Addressing a Web Audio Shortcoming

While the Web Audio API offers a wealth of features, it lacks native support for sidechainable compressors. The Sidechain Compressor helps to fill this gap, offering a sidechain-compatible compression solution that can be easily integrated into various web applications.

## Game Development: A Key Use-Case

In game development, the Sidechain Compressor offers the possibility for more nuanced audio experiences. Through real-time adjustments between dialogue, sound effects, and background music, the tool aims to contribute to a more immersive gaming environment.

### Access the Source Code and Demo

For those interested in further exploration or customization, the source code is readily available on the project’s [GitHub Repository](https://github.com/jadujoel/sidechain-compressor-audio-worklet).

### Conclusion

The Sidechain Compressor aims to be a useful addition to the web audio toolkit, addressing specific gaps and offering a more flexible audio environment. Whether you're involved in game development or are simply keen on enhanced web audio features, this tool offers a practical solution for a range of applications.
