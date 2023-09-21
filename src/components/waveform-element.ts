import WaveSurfer from 'wavesurfer.js'
interface WaveformProps {
  name?: string
  src?: string
  id?: string
  gain?: number
}
export class WaveFormElement extends HTMLElement {
  props: WaveformProps
  wave: WaveSurfer
  constructor() {
    super();
    const props = JSON.parse(this.dataset.message!);
    this.props = {
      ...props,
      gain: Number(props.gain ?? 0),
    };
    this.wave = WaveSurfer.create({
      container: this,
      waveColor: '#4F4A85',
      progressColor: '#383351',
      url: this.props.src!,
    })
    this.wave.on('interaction', () => {
      this.wave.play()
    })
    this.wave.setVolume(linearFromDecibel(this.props.gain ?? 0))
  }
}
customElements.define('waveform-element', WaveFormElement);
function linearFromDecibel(value: number) {
  return Math.pow(10, value / 20)
}
