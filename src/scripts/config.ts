import type { SConfig } from 'sengine';

function l(db: number): number {
  return Math.pow(10, db / 20)
}

export default <SConfig> {
  clips: {
    a_enter: {
      src: 'mel_a',
      gain: l(-30),
      destination: 'effects',
    },
    start: {
      src: 'drone_b',
      gain: l(-30),
      loop: 999999,
      destination: 'master'
    }
  },
  actions: {
    play_a_enter: {
      action: 'play',
      target: 'a_enter',
      type: 'clip',
    },
    play_start: {
      action: 'play',
      target: 'start',
      type: 'clip',
    },
  },
  buses: {
    effects: {
      gain: l(0),
      destination: 'master',
    },
    master: {
      gain: l(0),
    },
  },
  events: {
    a_enter: ['play_a_enter'],
    sengine_started: ['play_start']
  },
}
