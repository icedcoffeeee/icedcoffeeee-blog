export type ListType = {
	title: string;
	date: (number | null)[];
	location: string;
	lists: string[];
};

export const specials = {
	Physics:
		'Laser Physics, Optical Fibres and Waveguides, Semiconductor Physics, Material Junctions, Gas Discharge, Plasma Physics, Computational Simulation, Neural Networks.',
	Code: 'Python, MATLAB, C++, Javascript, NeoVim, VSCode, GitHub, Linux, Windows PowerShell.',
	Graphics: 'Adobe Illustrator, Adobe Photoshop, Figma, DaVinci Resolve.',
	Office: 'Microsoft Suite, Google Workspace, LaTeX',
	Hardware: 'Arduino, Raspberry Pi'
};

export default {
	education: [
		{
			title: 'Bachelors of Science in Physics',
			date: [2021, null],
			location: 'University of Malaya',
			lists: [
				'Current CGPA: 3.70',
				'Executive Chief of Academic Bureau, Physics Club (PERFUM) in 2022.'
			]
		},
		{
			title: 'Physics Foundations',
			date: [2020, 2021],
			location: 'Science Foundations Center, University of Malaya',
			lists: [
				'CGPA: 3.95',
				'Vice Executive Chief of Academic Bureau, 11th College High Committee full term.'
			]
		}
	],
	projects: [
		{
			title: 'Head of Technology, Solar for Schools Project',
			date: [2024],
			location: 'SMK Kota Damansara',
			lists: [
				'A competition aimed at secondary school students as introductory exposure to solar panels as clean energy.',
				'Managed the framework for how evaluation is handled.'
			]
		},
		{
			title: 'Application Designer, Hackathon',
			date: [2023],
			location: 'University of Malaya',
			lists: [
				'Built a mobile-app mockup for an artificial intelligence (AI) integrated couples scheduling app.'
			]
		},
		{
			title: 'Professor Reviews Site',
			date: [2023],
			location: 'LectCheck',
			lists: ['An open platform in reviewing lecturer teaching ability and assessment levels.']
		},
		{
			title: 'Club Electoral Site',
			date: [2023],
			location: 'University of Malaya',
			lists: [
				'A website showcasing the candidates for the next generation of the physics club committee.'
			]
		}
	],
	experience: [
		{
			title: 'Volunteering Assistant Lecturer',
			date: [2022, 2023],
			location: 'University of Malaya',
			lists: [
				'Taught 15 sessions of a mathematical methods supplementary class of 15-20 undergraduates.'
			]
		},
		{
			title: 'Independent Research',
			date: [2021, 2022],
			location: 'University of Malaya',
			lists: ['Research topic: Utility of Open Source Software in Science.']
		},
		{
			title: 'Open Source Development',
			date: [2020, 2021],
			location: 'GitHub Repository Maintainer',
			lists: [
				'Maintained a 77k LOC repository (Python).',
				'Regularly assisted 3 PR reviews per week.',
				'Opened an average of 5 PRs per month dedicated to introduce new features, fix bugs, and write documentation.'
			]
		}
	]
} as { [key: string]: ListType[] };
