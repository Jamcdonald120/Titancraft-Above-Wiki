import advancementFrameImg from '../img/advancement/advancement.png';
import goalFrameImg from '../img/advancement/goal.png';
import challengeFrameImg from '../img/advancement/challenge.png';

interface AdvancementProps {
	frame: 'advancement' | 'goal' | 'challenge'
	item: string
	enchanted?: boolean
}

const FRAMES = {
	advancement: advancementFrameImg,
	goal: goalFrameImg,
	challenge: challengeFrameImg
};

export function Advancement({frame, item, enchanted}) {
	const frameImg = FRAMES[frame];

	return <div>
		<img src={frameImg} width="64" height="64" />
		{ frame } - { item } - { enchanted }
	</div>
}