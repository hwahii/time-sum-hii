
export interface TimeRangeResult {
  totalMinutes: number;
  rangesFound: number;
  details: {
    start: string;
    end: string;
    duration: number;
  }[];
}

/**
 * Parses text to find time ranges like HHmm-HHmm or HH:mm-HH:mm
 */
export const calculateTotalDuration = (text: string): TimeRangeResult => {
  // Regex to match formats like:
  // 0600-0700
  // 06:00 - 07:00
  // 9:00~11:30
  // 0930~1045
  const regex = /(\d{1,2})[:：]?(\d{2})\s*[-~至]\s*(\d{1,2})[:：]?(\d{2})/g;
  
  let totalMinutes = 0;
  let rangesFound = 0;
  const details: TimeRangeResult['details'] = [];
  
  let match;
  while ((match = regex.exec(text)) !== null) {
    const startH = parseInt(match[1], 10);
    const startM = parseInt(match[2], 10);
    const endH = parseInt(match[3], 10);
    const endM = parseInt(match[4], 10);
    
    // Convert to minutes from start of day
    const startTotal = startH * 60 + startM;
    let endTotal = endH * 60 + endM;
    
    // Handle case where end time is earlier than start time (next day)
    if (endTotal < startTotal) {
      endTotal += 24 * 60;
    }
    
    const diff = endTotal - startTotal;
    totalMinutes += diff;
    rangesFound++;
    
    details.push({
      start: `${match[1].padStart(2, '0')}:${match[2]}`,
      end: `${match[3].padStart(2, '0')}:${match[4]}`,
      duration: diff
    });
  }
  
  return { totalMinutes, rangesFound, details };
};

export const formatDuration = (totalMinutes: number): string => {
  if (totalMinutes === 0) return '0 分鐘';
  
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  if (hours > 0 && minutes > 0) {
    return `${hours} 小時 ${minutes} 分`;
  } else if (hours > 0) {
    return `${hours} 小時`;
  } else {
    return `${minutes} 分鐘`;
  }
};
