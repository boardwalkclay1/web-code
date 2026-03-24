// guard.js — simple client-side guard (no server)
export function hasLocalAccess(requiredCategory = 'web') {
  const LOCAL_KEY = 'thecode_paid_v1';
  try {
    const arr = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
    return arr.some(p => p.id === requiredCategory && p.verified === true);
  } catch (e) {
    return false;
  }
}

export function runGuard(options = {}) {
  const REQUIRED_CATEGORY = options.category || 'web';
  const PAY_URL = options.payUrl || '/pay/index.html?category=' + encodeURIComponent(REQUIRED_CATEGORY);
  const overlay = document.getElementById('guard-overlay');

  if (!hasLocalAccess(REQUIRED_CATEGORY)) {
    if (overlay) {
      overlay.classList.remove('hidden');
      // short delay then redirect to pay page
      setTimeout(() => { location.href = PAY_URL; }, 1200);
    } else {
      location.href = PAY_URL;
    }
    return false;
  } else {
    if (overlay) overlay.classList.add('hidden');
    return true;
  }
}
