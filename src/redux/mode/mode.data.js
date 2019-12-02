export const LIST_OF_MODES = [
  {
    id: 0,
    text: 'Day',
    showHours: 25,
    labels: 12,
    intlOptions: {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }
  },
  {
    id: 1,
    text: 'Week',
    showHours: 24 * 7,
    labels: 12,
    intlOptions: {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      weekday: 'short',
      hour12: false
    }
  },
  {
    id: 2,
    text: 'Month',
    showHours: 24 * 30,
    labels: 12,
    intlOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  }
];
