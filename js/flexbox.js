
// --- Fungsi deskripsi Flexbox ---
export function describeFlexbox(direction, justify, align, alignContent) {
	const mainAxis = direction === 'row' ? 'horizontal' : 'vertikal';
	const crossAxis = direction === 'row' ? 'vertikal' : 'horizontal';

	const justifyDesc = {
		'flex-start': `berawal dari awal kontainer secara ${mainAxis}`,
		'center': `dipusatkan di tengah kontainer secara ${mainAxis}`,
		'flex-end': `didorong ke akhir kontainer secara ${mainAxis}`,
		'space-between': `disebar merata dengan jarak antar kotak tanpa ruang di tepi secara ${mainAxis}`,
		'space-around': `disebar merata dengan ruang seimbang di kiri dan kanan tiap kotak secara ${mainAxis}`,
		'space-evenly': `disebar dengan jarak yang benar-benar sama di antara dan di tepi secara ${mainAxis}`
	};

	const alignDesc = {
		'flex-start': `diposisikan di bagian awal sumbu ${crossAxis}`,
		'center': `diposisikan di tengah sumbu ${crossAxis}`,
		'flex-end': `diposisikan di akhir sumbu ${crossAxis}`,
		'stretch': `direntangkan untuk memenuhi ruang di sumbu ${crossAxis}`,
		'baseline': `disejajarkan berdasarkan garis dasar teks`
	};

	const alignContentDesc = {
		'flex-start': 'baris/kolom dikumpulkan di awal sumbu silang',
		'center': 'baris/kolom dipusatkan di sumbu silang',
		'flex-end': 'baris/kolom didorong ke akhir sumbu silang',
		'space-between': 'baris/kolom tersebar merata tanpa ruang di tepi sumbu silang',
		'space-around': 'baris/kolom tersebar dengan ruang seimbang di antara dan di tepi sumbu silang',
		'stretch': 'baris/kolom direntangkan untuk mengisi ruang di sumbu silang'
	};

	return `Flex-direction: ${direction} (${mainAxis}), justify-content: ${justifyDesc[justify]}, align-items: ${alignDesc[align]}, align-content: ${alignContentDesc[alignContent]}.`;
}

export function createBoxes(container) {
	container.innerHTML = '';
	for (let i = 1; i <= 9; i++) {
		const box = document.createElement('div');
		box.className = "box cursor-grab select-none rounded-lg bg-gradient-to-tr from-indigo-500 via-indigo-600 to-indigo-700 shadow-lg text-white font-semibold flex items-center justify-center w-16 h-16 transition-transform duration-200 hover:scale-110 hover:shadow-xl active:cursor-grabbing";
		box.textContent = i;
		box.draggable = true;
		container.appendChild(box);
	}
}

export function getPositions(container) {
	const boxes = [...container.querySelectorAll('.box')];
	const positions = new Map();
	boxes.forEach(box => {
		const rect = box.getBoundingClientRect();
		positions.set(box, rect);
	});
	return positions;
}

export function animateFLIP(container, oldPositions) {
	const boxes = [...container.querySelectorAll('.box')];
	boxes.forEach(box => {
		const oldPos = oldPositions.get(box);
		const newPos = box.getBoundingClientRect();

		const deltaX = oldPos.left - newPos.left;
		const deltaY = oldPos.top - newPos.top;

		if (deltaX !== 0 || deltaY !== 0) {
			box.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
			box.style.transition = 'transform 0s';

			box.getBoundingClientRect();

			box.style.transition = 'transform 300ms ease';
			box.style.transform = 'translate(0, 0)';

			box.addEventListener('transitionend', () => {
				box.style.transform = '';
				box.style.transition = '';
			}, { once: true });
		}
	});
}
