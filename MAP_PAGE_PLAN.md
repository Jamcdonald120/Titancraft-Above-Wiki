# Updated Project Plan: Adding a Map Page

## Overview
This plan outlines the steps to add a new Map page to the Titancraft Above Wiki, utilizing the existing Map component for displaying an interactive map.

## Tasks

### High Priority
- **Create Map Page Component**: Create `src/pages/map.tsx` that renders the Map component with proper Docusaurus layout.
- **Add Navbar Item**: Update `docusaurus.config.ts` to include a 'Map' link in the navbar pointing to `/map`.

### Medium Priority
- **Update Footer Links**: Add 'Map' to the footer links under the Wiki section in `docusaurus.config.ts`.
- **Gather Mob Data for Jenner Locations**: Collect and organize mob spawn data specifically for areas associated with Jenner NPC.
 - **Gather Boss Locations and Coordinates**: Collect locations and coordinates for each boss.
   - [ ] Bee Queen (Flower Forest biome, no coordinates specified)
   - [ ] Broodmother (Forest biome cave, no coordinates specified)
   - [ ] Dullahan (arena, no coordinates specified)
   - [ ] Gremora (Swamp biome witch hut, no coordinates specified)
   - [ ] Kermode (Snowy biome cave, no coordinates specified)
   - [ ] Midas (volcano golden cave, no coordinates specified)
   - [ ] Specters (arenas scattered around the Above, no coordinates specified)
   - [ ] The Fallen One (near volcano, no coordinates specified)
   - [ ] Volt (island south of central spawn, no coordinates specified)
   - [ ] Von Fiend (Savanna biome near cars, no coordinates specified)
 - **Gather NPC Locations and Coordinates**: Collect locations and coordinates for each NPC.
   - [ ] Jenner (Hills biome blimp, x: 499940, y: 106, z: 404)
- **Gather Minigame Locations and Coordinates**: Collect locations and coordinates for each minigame.
  - [ ] Trapdoor Mini-Game (coordinates not specified)
  - [ ] Ice Boat Raceway (coordinates not specified)
  - [ ] Pig Racing Pen (coordinates not specified)
- **Create Map Markers for Mobs**: Design and implement custom map markers for each mob (bosses and NPCs) to be displayed on the map at their spawn locations.
- **Create Map Markers for Gateways**: Design and implement custom map markers for gateways to be displayed on the map at their locations. Ensure that lines are drawn between source and destination gateways.
- **Create Map Markers for Structures**: Design and implement custom map markers for structures to be displayed on the map at their locations.
- **Create Map Markers for Minigames**: Design and implement custom map markers for minigames to be displayed on the map at their locations.
- **Add Titan Shard Indicators**: Include indicators showing how many titan shards can be acquired at each location (structures, bosses, etc.) on the map markers.
- **Implement Spoiler Layer**: Add a spoiler layer toggle to the Map component to hide/show certain mob markers (e.g., bosses or rare mobs) to prevent spoilers for new players.
- **Run Type Check**: Execute `npm run typecheck` to ensure TypeScript compilation passes.

### Low Priority
- **Test Page**: Start the development server with `npm start` and verify the Map page loads and functions correctly.

## Dependencies
- Existing `Map.tsx` component (uses react-leaflet)
- Docusaurus configuration files
- Node.js environment for running scripts

## Notes
- The Map component overlays `/docs/map.png` on a Leaflet map.
- Ensure the map image is accessible at the specified path.
- Follow existing code conventions and layout patterns from other pages.