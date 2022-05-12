import mapbox from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
mapbox.accessToken = "pk.eyJ1IjoidGFuamlyMjAyMiIsImEiOiJjbDMzM3ZpNTMwMDZvM2psNWZxOTdyMDdiIn0.BSvOkgK4u5AUEVwGSsPZ7w";

const key = Symbol();

export { mapbox, key };