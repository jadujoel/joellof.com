---
title: "Scode"
description: "Scode: Blazingly Fast Sound Encoder"
---

<div id="scode_container">
<iframe id="scode" src=https://jadujoel.github.io/scode/></iframe>
<style>
#scode {
  position: relative;
  height: 1000px;
  width: 200%;
  border: none;
  transform: scale(0.7);
  transform-origin: 0 0;
  max-width: 140%;
  max-height: 900px;
  overflow: hidden;
}
#scode_container {
  height: 400px;
  overflow: hidden;
}
</style>
</div>

### Overview

Scode offers a specialized solution for professionals managing large sound file collections within a monorepo setup. Designed with a focus on simplicity and efficiency, it caters specifically to projects requiring conversion of .wav files to other formats under precise conditions.

The encoder processes all .wav files, generating encoded versions and a comprehensive .atlas.json for mapping. Files are named uniquely, combining bitrate, channel count, and a hash for identification.

### Language Support

For projects requiring multi-language support, the scodefig.jsonc file can be configured to accommodate various languages, with options for specifying directory structures per language.

### Usage

Given that you have `bash` and `npm` installed, you can run the following command to create a new directory, initialize a new `npm` project, install `scode`, copy the example files, encode the wav files and start the server:

```bash
mkdir example && cd example && npm init --yes && npm install @jadujoel/scode && cp -R node_modules/@jadujoel/scode/example/* . && npm run start
```

### Technology Stack

The encoder is built using Rust, leveraging the `clap` and `rayon` crates for command-line argument parsing and parallel processing, respectively. It also makes use of ffmpeg for the actual encoding process.

The source code is available on [GitHub](https://github.com/jadujoel/scode).

There is a codesigning script in there that might be interesting for others who find it cumbersome to codesign their executables on macOS. There are instructions on how to use it in the script. You'll need to create your own .env file (or add variables as secrets to your github workflow). You can also use the script to codesign other executables.

You might also find the `artifact.yml` file interesting. It's a GitHub action that builds the project and uploads the artifacts for many different platforms, supporting x86 and arm for most platforms.
