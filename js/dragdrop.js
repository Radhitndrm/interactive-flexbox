
export function initDragDrop(container, dir, updateStyles) {
	let dragged;

	container.addEventListener('dragstart', e => {
		if (e.target.classList.contains('box')) {
			dragged = e.target;
			dragged.classList.add('dragging');
			setTimeout(() => dragged.style.display = 'none', 0);
		}
	});

	container.addEventListener('dragend', e => {
		if (dragged) {
			dragged.classList.remove('dragging');
			dragged.style.display = 'flex';
			dragged = null;
			updateStyles();
		}
	});

	container.addEventListener('dragover', e => {
		e.preventDefault();
		const afterElement = getDragAfterElement(container, e.clientX, e.clientY, dir.value);
		if (!dragged) return;
		if (afterElement == null) {
			container.appendChild(dragged);
		} else {
			container.insertBefore(dragged, afterElement);
		}
	});
}

function getDragAfterElement(container, x, y, currentDirection) {
	const draggableElements = [...container.querySelectorAll('.box:not(.dragging)')];
	return draggableElements.reduce((closest, child) => {
		const box = child.getBoundingClientRect();
		const offset = currentDirection === 'row'
			? x - box.left - box.width / 2
			: y - box.top - box.height / 2;
		if (offset < 0 && offset > closest.offset) {
			return { offset: offset, element: child };
		} else {
			return closest;
		}
	}, { offset: Number.NEGATIVE_INFINITY }).element;
}
