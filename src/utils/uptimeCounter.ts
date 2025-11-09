// 网站开站日期（你可以根据实际情况修改）
const SITE_LAUNCH_DATE = '2022-10-04T00:00:00+08:00';

export interface UptimeInfo {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  formatted: string;
}

export function getSiteUptime(): UptimeInfo {
  if (typeof window === 'undefined') {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalDays: 0,
      formatted: '0天'
    };
  }

  const launchTime = new Date(SITE_LAUNCH_DATE).getTime();
  const currentTime = new Date().getTime();
  const diff = currentTime - launchTime;

  // 计算总天数（包括小数部分）
  const totalDays = diff / (1000 * 60 * 60 * 24);

  // 计算各个时间单位
  const days = Math.floor(totalDays);
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // 格式化显示
  let formatted = '';
  if (days > 0) {
    formatted = `${days}天`;
    if (hours > 0) formatted += `${hours}小时`;
  } else if (hours > 0) {
    formatted = `${hours}小时${minutes}分钟`;
  } else if (minutes > 0) {
    formatted = `${minutes}分钟${seconds}秒`;
  } else {
    formatted = `${seconds}秒`;
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    totalDays: Math.floor(totalDays),
    formatted
  };
}

export function getDetailedUptime(): string {
  const uptime = getSiteUptime();

  if (uptime.days >= 365) {
    const years = Math.floor(uptime.days / 365);
    const remainingDays = uptime.days % 365;
    return `${years}年${remainingDays}天`;
  } else if (uptime.days >= 30) {
    const months = Math.floor(uptime.days / 30);
    const remainingDays = uptime.days % 30;
    return `${months}个月${remainingDays}天`;
  } else if (uptime.days > 0) {
    return `${uptime.days}天${uptime.hours}小时`;
  } else {
    return `${uptime.hours}小时${uptime.minutes}分钟`;
  }
}

// 启动实时更新计时器
export function startUptimeTimer(callback: (uptime: UptimeInfo) => void): number {
  // 立即执行一次
  callback(getSiteUptime());

  // 每秒更新一次
  return window.setInterval(() => {
    callback(getSiteUptime());
  }, 1000);
}

// 停止计时器
export function stopUptimeTimer(timerId: number): void {
  clearInterval(timerId);
}