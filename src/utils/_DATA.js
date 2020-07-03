let users = {
	sarahedo: {
		id: "sarahedo",
		name: "Sarah Edo",
		avatarURL: "",
		answers: {
			"8xf0y6ziyjabvozdd253nd": "optionOne",
			"6ni6ok3ym7mf1p33lnez": "optionTwo",
			am8ehyc8byjqgar0jgpub9: "optionTwo",
			loxhs1bqm25b708cmbf3g: "optionTwo",
		},
		questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
	},
	tylermcginnis: {
		id: "tylermcginnis",
		name: "Tyler McGinnis",
		avatarURL: "",
		answers: {
			vthrdm985a262al8qx3do: "optionOne",
			xj352vofupe1dqz9emx13r: "optionTwo",
		},
		questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
	},
	johndoe: {
		id: "johndoe",
		name: "John Doe",
		avatarURL: "",
		answers: {
			xj352vofupe1dqz9emx13r: "optionOne",
			vthrdm985a262al8qx3do: "optionTwo",
			"6ni6ok3ym7mf1p33lnez": "optionTwo",
		},
		questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
	},
	chip: {
		id: "chip",
		name: "Chip",
		avatarURL: require("../images/chip_avatar_150.png"),
		answers: {
			xj352vofupe1dqz9emx13r: "optionOne",
			vthrdm985a262al8qx3do: "optionTwo",
			"6ni6ok3ym7mf1p33lnez": "optionTwo",
			fxvd9mpeorizbp1e3xei1: "optionOne",
		},
		questions: [],
	},
	dale: {
		id: "dale",
		name: "Dale",
		avatarURL: require("../images/dale_avatar_150.png"),
		answers: {},
		questions: ["fxvd9mpeorizbp1e3xei1"],
	},
	monty: {
		id: "monty",
		name: "Monty",
		avatarURL: require("../images/monty_avatar_150.png"),
		answers: {
			xj352vofupe1dqz9emx13r: "optionOne",
			fxvd9mpeorizbp1e3xei1: "optionTwo",
			vthrdm985a262al8qx3do: "optionTwo",
		},
		questions: [""],
	},
	gadget: {
		id: "gadget",
		name: "Gadget",
		avatarURL: require("../images/gadget_avatar_150.png"),
		answers: {
			am8ehyc8byjqgar0jgpub9: "optionOne",
		},
		questions: ["z3o111uczopc3weu0ymrfu"],
	},
};

let questions = {
	z3o111uczopc3weu0ymrfu: {
		id: "z3o111uczopc3weu0ymrfu",
		author: "gadget",
		timestamp: 1593386867914,
		optionOne: {
			votes: [""],
			text: "have a desk job",
		},
		optionTwo: {
			votes: [""],
			text: "have an outdoor job",
		},
	},
	fxvd9mpeorizbp1e3xei1: {
		id: "fxvd9mpeorizbp1e3xei1",
		author: "dale",
		timestamp: 1593786890916,
		optionOne: {
			votes: ["chip"],
			text: "be without internet for a week",
		},
		optionTwo: {
			votes: ["monty"],
			text: "be without your phone for a week",
		},
	},
	"8xf0y6ziyjabvozdd253nd": {
		id: "8xf0y6ziyjabvozdd253nd",
		author: "sarahedo",
		timestamp: 1467166872634,
		optionOne: {
			votes: ["sarahedo"],
			text: "have horrible short term memory",
		},
		optionTwo: {
			votes: [],
			text: "have horrible long term memory",
		},
	},
	"6ni6ok3ym7mf1p33lnez": {
		id: "6ni6ok3ym7mf1p33lnez",
		author: "johndoe",
		timestamp: 1468479767190,
		optionOne: {
			votes: [],
			text: "become a superhero",
		},
		optionTwo: {
			votes: ["johndoe", "sarahedo", "chip"],
			text: "become a supervillain",
		},
	},
	am8ehyc8byjqgar0jgpub9: {
		id: "am8ehyc8byjqgar0jgpub9",
		author: "sarahedo",
		timestamp: 1488579767190,
		optionOne: {
			votes: ["gadget"],
			text: "be telekinetic",
		},
		optionTwo: {
			votes: ["sarahedo"],
			text: "be telepathic",
		},
	},
	loxhs1bqm25b708cmbf3g: {
		id: "loxhs1bqm25b708cmbf3g",
		author: "tylermcginnis",
		timestamp: 1482579767190,
		optionOne: {
			votes: [],
			text: "be a front-end developer",
		},
		optionTwo: {
			votes: ["sarahedo"],
			text: "be a back-end developer",
		},
	},
	vthrdm985a262al8qx3do: {
		id: "vthrdm985a262al8qx3do",
		author: "tylermcginnis",
		timestamp: 1489579767190,
		optionOne: {
			votes: ["tylermcginnis"],
			text: "find $50 yourself",
		},
		optionTwo: {
			votes: ["johndoe", "chip", "monty"],
			text: "have your best friend find $500",
		},
	},
	xj352vofupe1dqz9emx13r: {
		id: "xj352vofupe1dqz9emx13r",
		author: "johndoe",
		timestamp: 1493579767190,
		optionOne: {
			votes: ["johndoe", "chip", "monty"],
			text: "write JavaScript",
		},
		optionTwo: {
			votes: ["tylermcginnis"],
			text: "write Swift",
		},
	},
};

function generateUID() {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
}

export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...users }), 1000);
	});
}

export function _getQuestions() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...questions }), 1000);
	});
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		author,
		optionOne: {
			votes: [],
			text: optionOneText,
		},
		optionTwo: {
			votes: [],
			text: optionTwoText,
		},
	};
}

export function _saveQuestion(question) {
	return new Promise((res, rej) => {
		const authedUser = question.author;
		const formattedQuestion = formatQuestion(question);

		setTimeout(() => {
			questions = {
				...questions,
				[formattedQuestion.id]: formattedQuestion,
			};

			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					questions: users[authedUser].questions.concat([formattedQuestion.id]),
				},
			};

			res(formattedQuestion);
		}, 1000);
	});
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer,
					},
				},
			};

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser]),
					},
				},
			};

			res();
		}, 500);
	});
}
