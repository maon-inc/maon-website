export interface GeoLocation {
  country: string;
  region: string;
}

export async function getGeoLocation(): Promise<GeoLocation> {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return {
      country: data.country_name || "Unknown",
      region: data.region || "Unknown",
    };
  } catch {
    return {
      country: "Unknown",
      region: "Unknown",
    };
  }
}
