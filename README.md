# Pokemon Team Builder

<div style="background: linear-gradient(45deg, #FF0000 0%, #CC0000 100%); padding: 20px; border-radius: 10px; color: white;">
A dynamic React application for building your ultimate Pokemon team with type compatibility checks and detailed Pokemon statistics.
</div>

## Features

- **Real-time Team Building**: Assemble your dream team of up to 6 Pokemon
- **Type Compatibility**: Automatic checks to prevent type conflicts in your team
- **Advanced Filtering**: Sort and filter Pokemon by:
  - Type
  - HP
  - Attack
  - Speed
  - Pokedex Number
- **Team Statistics**: View comprehensive team stats and analysis
- **Pokemon Details**: Detailed view of each Pokemon's specifications
- **Release System**: Ability to release Pokemon back into the wild

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Data Management**: JSON Server
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:pyrxallan/phase2-code-challenge.git
cd phase2-code-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON server (on port 8001):
```bash
npx json-server --watch db.json --port 8001
```

4. In a new terminal, start the development server:
```bash
npm run dev
```

5. Open your browser and visit: `http://localhost:5173`

## Project Structure

```
phase2-code-challenge/
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx    # Individual Pokemon card display
│   │   ├── PokemonSpecs.jsx   # Detailed Pokemon specifications
│   │   ├── TeamStats.jsx      # Team statistics overview
│   │   ├── FilterBar.jsx      # Pokemon filtering options
│   │   ├── SortBar.jsx        # Pokemon sorting options
│   │   └── MyTeam.jsx         # Current team display
│   ├── utils/
│   │   └── typeColors.js      # Pokemon type color mappings
│   ├── App.jsx               # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML entry point
└── package.json            # Project dependencies and scripts
```

## Team Building Rules

- Maximum of 6 Pokemon per team
- No duplicate Pokemon allowed
- Type conflicts are prevented automatically
- Pokemon can be freely added or removed from your team

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is part of the Flatiron School Phase 2 curriculum and is available for educational purposes.

## Acknowledgments

- Pokemon data provided by JSON Server
- Design inspiration from the Pokemon series
- Built with React and Tailwind CSS
