/** Path for an SVG wave seam: y = mid + amp * cos(x * 0.5). */
export function cosineWavePath(
  width = 1440,
  height = 80,
  amp = 22,
  periods = 2,
  invert = false
): string {
  // cos(x * 0.5) has period 4π; map width so we get `periods` full cycles
  const xMax = periods * 4 * Math.PI;
  const mid = height * 0.5;
  const step = width / 72;
  const pts: string[] = [];

  for (let px = 0; px <= width; px += step) {
    const x = (px / width) * xMax;
    const y = mid + (invert ? -1 : 1) * amp * Math.cos(x * 0.5);
    pts.push(`${px.toFixed(1)} ${y.toFixed(2)}`);
  }

  const lastX = width.toFixed(1);
  return `M${pts.join(" L")} L${lastX} ${height} L0 ${height} Z`;
}
