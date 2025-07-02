
import { describeFlexbox, createBoxes, getPositions, animateFLIP } from './flexbox.js';
import { initDragDrop } from './dragdrop.js';
import { initStarWave } from './starwave.js';

const container = document.getElementById('container');
const dir = document.getElementById('flex-direction');
const justify = document.getElementById('justify-content');
const alignItems = document.getElementById('align-items');
const alignContent = document.getElementById('align-content');
const wrapToggle = document.getElementById('wrap-toggle');
const output = document.getElementById('output');
const comboInfo = document.getElementById('combo-info');

function updateStyles() {
	const oldPositions = getPositions(container);

	const direction = dir.value;
	const justifyVal = justify.value;
	const alignVal = alignItems.value;
	const alignContentVal = alignContent.value;
	const wrapVal = wrapToggle.checked;

	container.classList.remove('flex-row', 'flex-col');
	container.classList.add(direction === 'row' ? 'flex-row' : 'flex-col');

	container.classList.remove(
		'justify-start', 'justify-center', 'justify-end',
		'justify-between', 'justify-around', 'justify-evenly'
	);
	const justifyMap = {
		'flex-start': 'justify-start',
		'center': 'justify-center',
		'flex-end': 'justify-end',
		'space-between': 'justify-between',
		'space-around': 'justify-around',
		'space-evenly': 'justify-evenly'
	};
	container.classList.add(justifyMap[justifyVal]);

	container.classList.remove('items-start', 'items-center', 'items-end', 'items-baseline', 'items-stretch');
	const alignItemsMap = {
		'flex-start': 'items-start',
		'center': 'items-center',
		'flex-end': 'items-end',
		'baseline': 'items-baseline',
		'stretch': 'items-stretch'
	};
	container.classList.add(alignItemsMap[alignVal]);

	container.classList.remove('flex-wrap', 'flex-nowrap');
	container.classList.add(wrapVal ? 'flex-wrap' : 'flex-nowrap');

	container.style.alignContent = alignContentVal;

	output.textContent = `flex-direction: ${direction} | justify-content: ${justifyVal} | align-items: ${alignVal} | align-content: ${alignContentVal} | flex-wrap: ${wrapVal}`;

	comboInfo.textContent = describeFlexbox(direction, justifyVal, alignVal, alignContentVal);

	animateFLIP(container, oldPositions);
}

createBoxes(container);
initDragDrop(container, dir, updateStyles);

[dir, justify, alignItems, alignContent, wrapToggle].forEach(el => {
	el.addEventListener('change', updateStyles);
});

updateStyles();

initStarWave();
