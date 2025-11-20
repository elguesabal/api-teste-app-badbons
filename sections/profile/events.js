export const eventsNotFound = {
	pagination: {
		nextPage: true,
		totalPages: 2
	},
	data: []
};

export const events1 = {
	pagination: {
		nextPage: true,
		totalPages: 2
	},
	data: [
		{
			event: "Arco de Shibuya",
			games: [
				{
					title: "Final",
					favorite: true,
					player1: { name: "Gojo", points: 21 },
					player2: { name: "Sukuna", points: 23 }
				}
			]
		},
		{
			event: "BadBons Open 1/2024",
			games: [
				{
					title: "Semi-Final",
					favorite: false,
					player1: { name: "Grupo 1", points: 17 },
					player2: { name: "Grupo 2", points: 5 }
				},
				{
					title: "Quarta de Finais",
					favorite: false,
					player1: { name: "Grupo 1", points: 17 },
					player2: { name: "Grupo 2", points: 5 }
				}
			]
		},
		{
			event: "NDB Games 1/2024",
			games: [
				{
					title: "Final",
					favorite: false,
					player1: { name: "Grupo 1", points: 17 },
					player2: { name: "Grupo 2", points: 5 }
				},
				{
					title: "Semi-Final",
					favorite: false,
					player1: { name: "Grupo 1", points: 17 },
					player2: { name: "Grupo 2", points: 5 }
				}
			]
		}
	]
};

export const events2 = {
	pagination: {
		nextPage: false,
		totalPages: 2
	},
	data: [
		{
			event: "teste 1",
			games: [
				{
					title: "teste",
					favorite: true,
					player1: { name: "Player 1", points: 21 },
					player2: { name: "Player 2", points: 23 }
				}
			]
		},
		{
			event: "teste 2",
			games: [
				{
					title: "teste",
					favorite: true,
					player1: { name: "Player 1", points: 21 },
					player2: { name: "Player 2", points: 23 }
				},
				{
					title: "teste",
					favorite: false,
					player1: { name: "Player 1", points: 21 },
					player2: { name: "Player 2", points: 23 }
				}
			]
		},
		{
			event: "teste 3",
			games: [
				{
					title: "teste",
					favorite: true,
					player1: { name: "Player 1", points: 21 },
					player2: { name: "Player 2", points: 23 }
				}
			]
		},
	]
};