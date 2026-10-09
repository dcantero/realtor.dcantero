/** "+16099635311" -> "609 963 5311" (US numbers); other formats pass through. */
export function formatPhone(e164: string): string {
  const digits = e164.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (national.length !== 10) return e164;
  return `${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
}

/** "+16099635311" -> "(609) 963-5311" */
export function formatPhonePretty(e164: string): string {
  const digits = e164.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (national.length !== 10) return e164;
  return `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
}

export const telHref = (e164: string) => `tel:${e164}`;

export const smsHref = (e164: string, body?: string) =>
  body ? `sms:${e164}?body=${encodeURIComponent(body)}` : `sms:${e164}`;

export const mailtoHref = (email: string, subject?: string) =>
  subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
