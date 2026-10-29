export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Contributions {
  total: number;
  days: ContributionDay[];
}

export async function getContributions(
  username: string,
): Promise<Contributions | null> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { signal: AbortSignal.timeout(10000) },
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return {
      total: data.total?.lastYear ?? 0,
      days: data.contributions,
    };
  } catch {
    return null;
  }
}
