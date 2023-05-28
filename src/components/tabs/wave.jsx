import styles from './Wave.module.css'
function wave(e) {
    const size = 150,
        x = e.nativeEvent.offsetX - size / 2,
        y = e.nativeEvent.offsetY - size / 2,
        wave = document.createElement("span");
    wave.className = styles.wave;
    wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`;
    e.target.appendChild(wave);
    setTimeout(() => wave.remove(), 500);
}

export default wave