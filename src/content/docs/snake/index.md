---
title: "Snake"
description: "Snake Game: A Journey Through Rust, Yew, and WebAssembly"
---

## A Classic Reimagined: Crafting a Snake Game with Modern Web Technologies

<div id="snek_container">
<iframe id="snek" src=https://jadujoel.github.io/snake/></iframe>
<style>
#snek {
  position: relative;
  height: 1200px;
  width: 200%;
  border: none;
  transform: scale(0.7);
  transform-origin: 0 0;
  max-width: 140%;
  max-height: 900px;
  overflow: hidden;
}
#snek_container {
  height: 650px;
  overflow: hidden;
}
</style>
</div>

---

### Introduction


The project at hand, a rendition of the timeless Snake game, represents more than just an exercise in nostalgia. It serves as a rich learning ground, where the front-end is meticulously built using Rust through its React-like framework, Yew, and then compiled into WebAssembly for browser compatibility. This development endeavor expanded my understanding of interfacing Rust with JavaScript via `web_sys` and introduced me to the utility of Rust's linter, Clippy.




---

### Live Demo and Source Code

Feel the game in action: [Play it here](https://jadujoel.github.io/snake/)
For those interested in the nitty-gritty, the source code is available on [GitHub](https://github.com/jadujoel/snake).



### Technology Stack

#### Rust and Yew: Front-end Development Reimagined

The use of Rust, particularly its Yew framework, was instrumental in structuring the front-end of the application. Yew offers a set of React-like functionalities, making it a decent choice for crafting a responsive, modern user interface with the performance and safety advantages Rust provides.

#### WebAssembly: Bridging Rust to the Browser

The Rust codebase is compiled into WebAssembly, enabling seamless execution in the web environment. WebAssembly ensures the high performance of the game, bridging the gap between web-based applications and native performance metrics.

#### web_sys: The JavaScript Bridge

For those instances requiring direct JavaScript interaction—like accessing the Web Audio API—the `web_sys` crate came into play. This crate provides the necessary bindings for making calls to JavaScript from within Rust, enabling smooth inter-language operability.

#### Clippy: Ensuring Rust Best Practices

One cannot overlook the importance of maintaining structured and optimized code. Here, Clippy played a pivotal role. This Rust linter helped identify potential issues, suggested optimizations, and enforced best practices throughout the development process.

---

### Code Highlights

#### Audio Functionality

Here's an excerpt showcasing audio control through Rust:

```rust
pub fn play_food_eaten(context: &AudioContext, frequency: f32, gain: f32) {
    let now = context.current_time();
    let oscillator = context.create_oscillator().unwrap();

    oscillator.set_type(web_sys::OscillatorType::Square);

    oscillator.frequency()
      .set_value(clamp(
          10.0,
          frequency + random_f32(0.0, 800.0) - 400.0,
          20000.0,
      ));

    oscillator.start().unwrap();
    oscillator.stop_with_when(now + 0.4);
    oscillator.frequency()
      .set_value_curve_at_time(&mut [frequency, random_f32(10.0, 800.0)], now, 0.3);

    let gain_node = context.create_gain().unwrap();
    gain_node.gain().set_value(math::linear_from_decibel(gain));
    gain_node
      .gain()
      .exponential_ramp_to_value_at_time(0.01, now + 0.3);

    oscillator
      .connect_with_audio_node(&gain_node)
      .unwrap()
      .connect_with_audio_node(&context.destination());
}
```

This function illustrates how to interface with the Web Audio API using Rust and `web_sys`, handling oscillator types and frequencies with fluidity.

---

### Conclusion

Building this Snake game was an insightful journey that extended beyond the traditional boundaries of front-end web development. It provided a unique vantage point for exploring Rust's capabilities in a web context, particularly via the Yew framework and WebAssembly. The experience also served as a practical tutorial on interfacing Rust code with JavaScript functionalities using `web_sys`, while Clippy helped ensured that the code remained clean and optimized.

By diving into this project, I've gained a multi-faceted understanding of what modern web technologies can offer, particularly when deviating from the more common JavaScript-centric ecosystems. The skills acquired here are not just project-specific; they provide a foundation for developing complex, efficient, and secure web applications in the future.
