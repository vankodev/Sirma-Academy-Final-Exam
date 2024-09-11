# Football Tournament Website

**Final Exam Project for Sirma Academy**

[Live Demo](https://football-tournament.netlify.app/)

## Summary

A React.js web application built for the Sirma Academy final exam. It visualizes data from the European Football Championship, including match results, team details, and player formations. The application dynamically parses data from CSV files, stores it using React's Context API, and renders it in an interactive, responsive interface. Users can explore match brackets, group stages, and detailed views of individual teams and matches.

## How to Start the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/vankodev/Sirma-Academy-Final-Exam.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm run dev
   ```

## Functionality

- **CSV Data Input**: The application receives and parses data from CSV files, which contain information about matches, teams, and players.
- **Data Management**: Parsed data is stored globally using React's Context API, allowing easy access across the entire app.
- **Dynamic Rendering**: The parsed data is dynamically rendered into various components, including match stages and details, team formations, teams and players lists.
- **Interactive Visualizations**: The app visualizes match brackets and team formations using dynamic diagrams.
- **Dynamic Routing**: The app uses dynamic routing to navigate to unique pages for each match and team.
- **Team Formations**: Visual representation of team formations shows player positions on the field for each match.

## Views

- **Matches Overview**: Users can explore the tournament matches, which are displayed in two formats — a brackets diagram for knockout stages and a group stage view sorted by date.
- **Match Details**: Dynamically generated pages for each match, displaying detailed information such as results and team formations. The formations visualize player positions on the field based on players' information.
- **Team Players**: Users can view dynamically generated pages with team details with list of players for each team, including their positions and other relevant details.
- **Teams List**: A list of all teams participating in the tournament. Users can click on any team to view more specific details about the team.

## Implementation

### 1. Data Management

The app starts by parsing data from multiple CSV files. This data is stored in React Context, making it available to all components for dynamic rendering.

### 2. Matches Rendering

The matches data is split by a specific date and passed to the group stage component and brackets component accordingly.

#### Brackets Visualization Algorithm

The algorithm starts with the final match and works backwards. The final match from the matches data is moved to an array with final bracket. The algorithm iterates over the remaining matches to find the last match each team played based on their IDs. Once found, the matches are moved to the previous bracket. The algorithm repeats until all matches are moved to the correct bracket. Then all the matches in the brackets are rendered in the correct positions with the help of `display: flex` and `justify-content: space-around`.

#### Group Stage Visualization Algorithm

Matches are sorted into an object using their `Date` property as keys. This creates groups of matches for each unique date. The component iterates through these date-based groups, rendering a header with the date followed by a list of match cards for each match on that date.

### 3. Team Formation

The code filters team players to get starters (players with `fromMinutes === '0'`). These starters are then grouped by position in an object. The render method maps over a list of positions, creating rows for each position and filling them with the corresponding players.
