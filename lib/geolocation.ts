export interface GeoLocation {
  country: string;
  region: string;
}

export async function getGeoLocation(): Promise<GeoLocation> {
  // Try ipwho.is first (HTTPS, no rate limits for reasonable usage)
  try {
    const response = await fetch("https://ipwho.is/");
    if (response.ok) {
      const data = await response.json();
      if (data.success && data.country) {
        return {
          country: data.country,
          region: data.region || "Unknown",
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
