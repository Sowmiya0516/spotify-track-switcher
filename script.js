const iframe = document.getElementById("spotify-player");
const tracks = [
  "https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp",  // Example track 1
  "https://open.spotify.com/embed/track/6sGhpvvg6vK31bj0Ji6p2f?utm_source=generator",  // Example track 2
  "https://open.spotify.com/embed/track/5OcuwbMim2wXf05xGWJtaU?utm_source=generator",  // Example track 3
  "https://open.spotify.com/embed/track/4cvS3XEMGcDwRIf5UVSTYU?utm_source=generator",  // Example track 4
  "https://open.spotify.com/embed/track/3hsJA438KonbY5Pkt8n3SA?utm_source=generator"  // Example track 5
];

let currentTrackIndex = 0;

// Function to change the track based on the index
function changeTrack() {
  iframe.src = tracks[currentTrackIndex];
}

// Next Track functionality
document.getElementById("next").addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  changeTrack();
});

// Previous Track functionality
document.getElementById("prev").addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  changeTrack();
});

// Initial track load
changeTrack();
