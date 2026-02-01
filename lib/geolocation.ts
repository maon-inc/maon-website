export interface GeoLocation {
  country: string;
  region: string;
}

export async function getGeoLocation(): Promise<GeoLocation> {
  // Try ip-api.com first (45 requests/minute free, no API key needed)
  try {
    const response = await fetch("http://ip-api.com/json/?fields=country,regionName");
    if (response.ok) {
      const data = await response.json();
      if (data.country) {
        return {
          country: data.country,
          region: data.regionName || "Unknown",
        };
      }
    }
  } catch {
    // Fall through to backup
  }

  // Fallback to ipapi.co
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (response.ok) {
      const data = await response.json();
      if (data.country_name) {
        return {
          country: data.country_name,
          region: data.region || "Unknown",
        };
      }
    }
  } catch {
    // Fall through to default
  }

  return {
    country: "Unknown",
    region: "Unknown",
  };
}
