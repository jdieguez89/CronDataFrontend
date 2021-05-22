/*
Return CSS class depending of chart-components type passed as param in const
Example:
UTM_CHART_ICONS[LINE_CHART] -- return 'sys-icon-line'
 */
export const SYS_CHART_ICONS: { [key: string]: string } = {
  LINE_CHART: 'sys-icon-line',
  AREA_CHART: 'sys-icon-area-line',
  PIE_CHART: 'sys-icon-pie',
  VERTICAL_BAR_CHART: 'sys-icon-bar',
  HORIZONTAL_BAR_CHART: 'sys-icon-bar-horizontal',
  TAG_CLOUD_CHART: 'sys-icon-wordcloud',
  TABLE_CHART: 'sys-icon-table',
  GAUGE_CHART: 'sys-icon-gauge',
  GOAL_CHART: 'sys-icon-goal',
  METRIC_CHART: 'sys-icon-metric',
  HEATMAP_CHART: 'sys-icon-heatmap',
  COORDINATE_MAP_CHART: 'sys-icon-marker',
};
