
export function initStarWave() {
	const canvas = document.getElementById('star-wave-bg');
	const ctx = canvas.getContext('2d');

	let width, height;
	function resize() {
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
	}
	resize();
	window.addEventListener('resize', resize);

	// Bintang kecil yang subtle
	const starsCount = 80;
	const stars = [];
	for (let i = 0; i < starsCount; i++) {
		stars.push({
			x: Math.random() * width,
			y: Math.random() * height,
			radius: Math.random() * 1.2 + 0.3,
			alpha: Math.random() * 0.5 + 0.3,
			delta: 0.002 + Math.random() * 0.004
		});
	}

	// Gelombang multi-layer untuk efek depth
	const waves = [
		{ amplitude: 30, wavelength: 300, speed: 0.8, yOffsetRatio: 0.75, color: 'rgba(124, 58, 237, 0.3)' },  // indigo-600 transparent
		{ amplitude: 25, wavelength: 250, speed: 1.2, yOffsetRatio: 0.78, color: 'rgba(139, 92, 246, 0.25)' }, // indigo-400 transparent
		{ amplitude: 20, wavelength: 200, speed: 1.5, yOffsetRatio: 0.82, color: 'rgba(168, 85, 247, 0.2)' }   // indigo-300 transparent
	];

	let waveOffsets = [0, 0, 0];

	function drawWave(amplitude, wavelength, speed, yOffsetRatio, color, offsetIndex) {
		ctx.beginPath();
		const baseY = height * yOffsetRatio;
		ctx.moveTo(0, height);
		ctx.lineTo(0, baseY);

		for (let x = 0; x <= width; x++) {
			const y = baseY + amplitude * Math.sin((x + waveOffsets[offsetIndex]) * 2 * Math.PI / wavelength);
			ctx.lineTo(x, y);
		}

		ctx.lineTo(width, height);
		ctx.closePath();

		// Fill gradien linear dari ungu ke transparan
		const grad = ctx.createLinearGradient(0, baseY - amplitude * 1.2, 0, height);
		grad.addColorStop(0, color);
		grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

		ctx.fillStyle = grad;
		ctx.fill();

		waveOffsets[offsetIndex] += speed;
	}

	function drawStars() {
		for (const star of stars) {
			star.alpha += star.delta;
			if (star.alpha >= 0.8 || star.alpha <= 0.3) star.delta *= -1;

			ctx.beginPath();
			ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(139, 92, 246, ${star.alpha})`; // warna ungu pastel
			ctx.shadowColor = `rgba(139, 92, 246, ${star.alpha})`;
			ctx.shadowBlur = 6;
			ctx.fill();
		}
	}

	function animate() {
		ctx.clearRect(0, 0, width, height);

		// Gambar waves dari yang paling belakang ke depan
		for (let i = 0; i < waves.length; i++) {
			const w = waves[i];
			drawWave(w.amplitude, w.wavelength, w.speed, w.yOffsetRatio, w.color, i);
		}

		drawStars();

		requestAnimationFrame(animate);
	}

	animate();
}
